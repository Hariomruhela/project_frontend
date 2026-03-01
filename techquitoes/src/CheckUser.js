function ChecKUser(){
    const token =localStorage.getItem("token")
    const isAdmin=localStorage.getItem("is_admin")
    console.log("token is",token, "Admin is",isAdmin)
    
    if(token){
        return true
    }

    localStorage.removeItem("token")
    return false
    
        


}

export default ChecKUser;