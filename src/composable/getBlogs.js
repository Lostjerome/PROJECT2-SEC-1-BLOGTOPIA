const getBlog = async (id) => {
  // if id is not provided, return all blogs
  try {
    const idParam = id ? `/${id}` : "";
    const res = await fetch(`http://localhost:5000/blogs/${idParam}`);
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
    const res = await fetch(`http://localhost:5000/blogs?topics_like=${topic}`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getBlogsPaginated = async (page, limit = 10) => {
  try {
    const res = await fetch(
      `http://localhost:5000/blogs?_page=${page}&_limit=${limit}`
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getRecommendedBlogs = async () => {
  try {
    const res = await fetch(`http://localhost:5000/blogs?_limit=3`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  getBlog,
  getBlogsFromTitle,
  getBlogsFromTopic,
  getBlogsPaginated,
  getRecommendedBlogs,
};
