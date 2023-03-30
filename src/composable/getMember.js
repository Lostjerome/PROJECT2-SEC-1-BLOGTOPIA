const getMember = async(id) => {
    try{
        const idParam = id ? `/${id}` : "";
        const response = await fetch(`http://localhost:5000/members/${idParam}`)
        if(response.ok){
            const members = await response.json()
            return members
        }
        else{
            throw new error ('No DATA no fetch!!')
        }
    }
    catch(error){
        console.log(error)
    }
}

export default getMember