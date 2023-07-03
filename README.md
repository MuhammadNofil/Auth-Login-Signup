# Auth-Login-Signup
this is an simple AUTH module for login and signup using express JS Mongoose Bcrypt to Hash password and jsonwebtoken to send token on login you can create user by entering email and password it will save the user in the MongoDB. The backend will also check the email duplicate before creating the user if the email already exist in the databse it will send a message that user exist. and you can also login by entering the credentials if the credential is correct it will give you the data of the user with a JWT token and if the email or password is incorrect it will send you a message.
# Instruction to run the project  
1. npm i
2. place your mongodb URL in the env to connect your databse
3. you can change the port
4. run the starting command
## Start Command
```
npm run dev
```
# Endpoint 
1. http://localhost:8000/auth/signup
2. http://localhost:8000/auth/login



