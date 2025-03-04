const cookieParser = require("cookie-parser");
const express= require("express");
const app=express();
const userModel=require("./models/user");
const path=require('path');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cors=require("cors");
const user = require("./models/user");
app.use(cors({
    origin: "http://localhost:5173", // Allow requests only from your frontend
    credentials: true, // Allow cookies and authorization headers
}));
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.render("index");
}
);
app.get("/api",async (req,res)=>{
   try{
    const token=req.cookies.token;
    // if(!token)
    // {
    //     return res.status(401).json({message:"Unauthorized"});
    // }
    const decoded=jwt.verify(token,"secret");
    const user= await userModel.findOne({email:decoded.email});
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    return res.json({username:user.username});
   } catch (error) {
    return res.status(500).json({ message:"Server error",error:error.message});
   }
});
app.post("/create",async (req,res)=>
    {
        let {username,email,password,age}=req.body;
        bcrypt.genSalt(10,(err,salt)=>
        {
            bcrypt.hash(password,salt,async (err,hash)=>{
                let createdUser=await userModel.create({
                    username,
                    email,
                    password:hash,
                    age
                });
                let token=jwt.sign({email},"secret");
                res.cookie("token",token);
                res.redirect("/login");
            })
        })
        
        
    });
app.get("/login",async (req,res)=>
{
    
    res.render("login");
});
app.post("/login",async (req,res)=>
{
    let user= await userModel.findOne({email:req.body.email});
    // console.log(user.username);
    if(!user)
    {
        return res.send("Something went wrong!!");
    }
    bcrypt.compare(req.body.password,user.password,function(err,result){
        if(result)
        {
            let token=jwt.sign({email:user.email},"secret");
            res.cookie("token",token);
            // res.send(`<h3>Welcome ${user.username}!!</h3>`);
           
            res.redirect("http://localhost:5173/");
        }
        else
        {
            res.send("Something went wrong!!");
        }
    })
});
app.get("/logout", (req, res) => {
    res.clearCookie("token", { path: "/" }); // Clears token from cookies
    res.json({ message: "Logged out successfully" });
});

app.listen(3000);