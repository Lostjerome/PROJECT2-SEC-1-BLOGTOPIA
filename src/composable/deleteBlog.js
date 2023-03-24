const deleteBlog = async(id) =>{
    try{
        const getData = await fetch(`http://localhost:5000/blogs/${id}`,{
            method : 'DELETE'
        })
        return getData
    }
    catch(err){
        throw err
    }
}
export {deleteBlog}

  