const validator=require("validator")
const validatingSignUpData=(req)=>{
    const {firstName,lastName,password,emailId,userName}=req.body
    if(!firstName || !lastName || !userName){
        throw new Error("Invalid Username");      
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Invalid Email");
        
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Invalid password");
        
    }
}

module.exports={validatingSignUpData}