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

export { addBlog };
