// form validation function
const validate = (blog) => {
  if (blog.value.title === "") {
    alert("Please enter a title");
    return false;
  }
  if (blog.value.content === "") {
    alert("Please enter some content");
    return false;
  }
  if (blog.value.topics.length === 0) {
    alert("Please select at least one topic");
    return false;
  }
  if (blog.value.author === "") {
    alert("Please enter your name");
    return false;
  }
  return true;
};

// export the function
export { validate };
