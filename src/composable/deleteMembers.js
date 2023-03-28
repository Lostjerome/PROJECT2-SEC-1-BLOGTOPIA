const deleteMembers = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/members/${id}`, {
        method: "DELETE",
      });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

export { deleteMembers };