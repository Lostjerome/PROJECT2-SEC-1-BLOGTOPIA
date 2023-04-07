const deleteMembers = async (id) => {
    try {
      fetch(`http://localhost:5000/members/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };

export { deleteMembers };