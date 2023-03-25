const getBlog = async (id) => {
  // if id is not provided, return all blogs
  const idParam = id ? `/${id}` : "";
  const res = await fetch(`http://localhost:5000/blogs/${idParam}`);
  return await res.json();
};

const getBlogsFromTitle = async (searchTerm) => {
  const res = await fetch(
    `http://localhost:5000/blogs?title_like=${searchTerm}`
  );
  return await res.json();
};

const getBlogsFromTopic = async (topic) => {
  const res = await fetch(`http://localhost:5000/blogs?topics_like=${topic}`);
  return await res.json();
};

const getBlogsPaginated = async (page, limit = 10) => {
  const res = await fetch(
    `http://localhost:5000/blogs?_page=${page}&_limit=${limit}`
  );
  return await res.json();
};

const getRecommendedBlogs = async () => {
  const res = await fetch(`http://localhost:5000/blogs?_limit=3`);
  return await res.json();
};

export {
  getBlog,
  getBlogsFromTitle,
  getBlogsFromTopic,
  getBlogsPaginated,
  getRecommendedBlogs,
};
