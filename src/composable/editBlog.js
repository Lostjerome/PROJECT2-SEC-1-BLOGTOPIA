const editBlog = async (id, body) => {
  return fetch(`http://localhost:5000/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export { editBlog };
