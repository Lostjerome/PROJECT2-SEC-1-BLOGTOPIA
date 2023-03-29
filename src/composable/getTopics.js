const getTopics = async () => {
  try {
    const res = await fetch(`http://localhost:5000/topics`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export { getTopics };
