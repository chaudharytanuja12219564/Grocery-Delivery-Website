const express=require('express')
const path=require('path');
const app=express();
const LogInCollection=require('./mongo.js')
const LogInCollection1=require('./mongo2.js')
const bodyparser=require("body-parser");
app.use(express.json());
app.use(express.urlencoded( { extended: true } )); 

app.use(express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/checkout',(req,res)=>{
    res.sendFile(path.join(__dirname,'checkout.html'))
})
app.get('/loginpage',(req,res)=>{
    res.sendFile(path.join(__dirname,'loginpage.html'))
})
app.get('/signuppage',(req,res)=>{
    res.sendFile(path.join(__dirname,'signuppage.html'))
})
app.post('/signuppage', async (req, res) => {
    const { name, uname, email,ph, pass, add } = req.body;
  
    const data = {
      name,
      uname,
      email,
      ph,
      pass,
      add,
    };
  
    try {
      const checking = await LogInCollection.findOne({ email });
      if (checking) {
        res.status(400).send("User details already exist");
        return;
      }
      const newUser = new LogInCollection(data);
      await newUser.save();
      
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    }
  });
  

  app.post('/loginpage', async (req, res) => {
    try {
      const check = await LogInCollection.findOne({ uname: req.body.uname });
      if (!check || check.pass !== req.body.pass) {
        res.status(401).send("Invalid email or password");
        return;
      }
    
    
      res.redirect("/");
     
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    }
  });

  app.post('/checkout', async (req, res) => {
    const { name,email,ph, payment, add } = req.body;
  
    const data = {
      name,
      email,
      ph,
      payment,
      add,
    };
  
    try {
      const checking = await LogInCollection1.findOne({ email });
      if (checking) {
        res.status(400).send("User details already exist");
        return;
      }
      const newUser = new LogInCollection(data);
      await newUser.save();
      
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    }
  });
app.listen(80);