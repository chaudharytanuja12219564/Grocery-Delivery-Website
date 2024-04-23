const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://rgs786999:8wm6lhVoV59yirSJ@cluster0.9olfp7w.mongodb.net/",{
    dbName: "FruitsCheck",
})
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(`No connection ${err}`);
})

const logInSchema = new mongoose.Schema({
    name: { type: String, required: true }, // changed from Firstname
    email: { type: String, required: true, unique: true },
    ph: { type: String, required: true, unique: true },
    payment: { type: String, required: true },
    add: { type: String, required: true },

  });
const LogInCollection1=new mongoose.model('UserData2',logInSchema);
module.exports=LogInCollection1;

// const mongoose=require('mongoose');
