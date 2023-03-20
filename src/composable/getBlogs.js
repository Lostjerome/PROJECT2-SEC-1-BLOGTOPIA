const getBlog = async (id) => {
  // if id is not provided, return all blogs
  const idParam = id ? `/${id}` : "";
  const res = await fetch(`http://localhost:5000/blogs/${idParam}`);
  return await res.json();
};

export { getBlog };
