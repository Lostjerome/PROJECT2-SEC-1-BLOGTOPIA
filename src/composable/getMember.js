const getMember = async() => {
    try{
        const response = await fetch('http://localhost:5000/members')
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