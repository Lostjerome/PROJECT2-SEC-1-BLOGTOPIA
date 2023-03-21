const getTopics = async (id) => {
  const res = await fetch(`http://localhost:5000/topics`);
  return await res.json();
};

export { getTopics };
