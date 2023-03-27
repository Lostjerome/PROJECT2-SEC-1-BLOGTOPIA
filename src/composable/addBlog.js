const addBlog = async (body) => {
  return fetch(`http://localhost:5000/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export { addBlog };
