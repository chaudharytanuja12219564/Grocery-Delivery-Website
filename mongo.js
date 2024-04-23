const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://rgs786999:8wm6lhVoV59yirSJ@cluster0.9olfp7w.mongodb.net/",{
    dbName: "Fruits",
})
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(`No connection ${err}`);
})

const logInSchema = new mongoose.Schema({
    name: { type: String, required: true },
    uname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    ph: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    add: { type: String, required: true },
  });
const LogInCollection=new mongoose.model('UserData',logInSchema);
module.exports=LogInCollection;

// const mongoose=require('mongoose');
