const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashedpassword= async(password) =>{
    const newPassword = await bcrypt.hash(password,10)
    return newPassword
}

const comparePassword = async (password, passwordToCompareWith) => {
    const checkedpass = await bcrypt.compare(password, passwordToCompareWith);
    return checkedpass;
};

const token = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET);
};

module.exports={hashedpassword,comparePassword,token}