import { app } from "./app.js";

import { dbConnect } from "./Database/dbConnect.js";


dbConnect()
app.listen(3000, ()=>{
    console.log("Port Working");
})