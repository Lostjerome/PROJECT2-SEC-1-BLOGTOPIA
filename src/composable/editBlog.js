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

export { editBlog };
