import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, computed } from "vue";

export const useBlog = defineStore("blog", () => {
  const blogs = ref([]);
  const recommendedBlogs = computed(() => {
    return blogs.value.slice(0, 3);
  });

  const getBlog = async (id) => {
    // if id is not provided, return all blogs
    try {
      const idParam = id ? `/${id}` : "";
      const res = await fetch(`http://localhost:5000/blogs${idParam}`);
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };
  const getBlogsFromTitle = async (searchTerm) => {
    try {
      const res = await fetch(
        `http://localhost:5000/blogs?title_like=${searchTerm}`
      );
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };
  const getBlogsFromTopic = async (topic) => {
    try {
      const res = await fetch(
        `http://localhost:5000/blogs?topics_like=${topic}`
      );
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };
  const getBlogsPaginated = async (page = 0, limit = 10) => {
    try {
      const res = await fetch(
        `http://localhost:5000/blogs?_page=${page}&_limit=${limit}`
      );
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };
  const editBlog = async (id, body) => {
    try {
      const res = await fetch(`http://localhost:5000/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log("Blog updated successfully");
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  const addBlog = async (body) => {
    try {
      const res = await fetch(`http://localhost:5000/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log("Blog added successfully");
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBlog = async (id) => {
    try {
      fetch(`http://localhost:5000/blogs/${id}`, {
        method: "DELETE",
      });

      // remove the blog
      blogs.value = blogs.value.filter((blog) => blog.id !== id);

      console.log("Blog deleted successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    blogs,
    recommendedBlogs,
    getBlog,
    getBlogsFromTitle,
    getBlogsFromTopic,
    getBlogsPaginated,
    editBlog,
    addBlog,
    deleteBlog,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlog, import.meta.hot));
}
