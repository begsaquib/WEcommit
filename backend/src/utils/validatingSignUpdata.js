const validator=require("validator")

const validatingSignUpData = (req) => {
    const { firstName, lastName, userName, emailId,password  } = req.body;
       
       
    if (!firstName || typeof firstName !== 'string') {
        throw new Error("Invalid Name");
    }
    if (!lastName || typeof lastName !== 'string') {
        throw new Error("Invalid Name");
    }
    if (!userName || typeof userName !== 'string') {
        throw new Error("Invalid Username");
    }
    if (!emailId || !validator.isEmail(emailId)) {
        throw new Error("Invalid Email");
    }
    if (!password || !validator.isStrongPassword(password)) {
        throw new Error("Invalid password");
    }
};


module.exports={validatingSignUpData}