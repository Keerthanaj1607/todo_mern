// const mongoose=require("mongoose");
// // Use Express
// const express=require('express');
// //we are going tp use express in our app, so in app express instance is created
// const app=express();
// const cors=require('cors')
// //middleware
// app.use(express.json())
// app.use(cors())
// //Sample in-memory Storage
// //let todos=[];


// //connecting mongodb
// mongoose.connect('mongodb://localhost:27017/mern-app').then(()=>{
//     console.log("DB connected")}).catch((err)=>{
//     console.log(err)
// })
// //Creating schema
// const todoSchema=new mongoose.Schema({
//     title:{type:String,
//         required:true,
//     },
//     description:String,
// })
// //Creation of model
// const todoModel=mongoose.model('Todo',todoSchema)
// //Defining a route
// // app.get('/',(req,res)=>{
// //     res.send("Hello World")
// // })


// //Create a new todo item
// app.post("/todos",async(req,res)=>{
//    const{title,description}= req.body;
// //    const newTodo={
// // id:todos.length+1,
// //     title,
// //     description
// //    };
// //    todos.push(newTodo);
// //    console.log(todos);
// try{
// const newTodo= new todoModel({title,description});
// await newTodo.save();
// res.status(201).json(newTodo)
// }
// catch(error){
//     console.log(error);
//     res.status(500).json({message:error.message});

// }
  
// })
// //Get all items
// app.get('/todos',async (req,res)=>{
//     try{
//        const todos= await todoModel.find();
//         res.json(todos);
//     }
//     catch(error){
//         console.log(error);
//     res.status(500).json({message:error.message});
//     }
    
// })

// //Update aroute
// app.put("/todos/:id",async(req,res)=>{
//     try{
//     const{title,description}=req.body;
//    const id= req.params.id;
//  const updatedTodo=  await todoModel.findByIdAndUpdate(id,{title,description},{new:true})
//  if(!updatedTodo){
//     return res.status(404).json({message:"TODO NOT FOUND"})
//  }
//  res.json(updatedTodo)}
//  catch(error){
//     console.log(error);
//     res.status(500).json({message:error.message});

//  }
// })
// //  Delete a todo item
// app.delete('/todos/:id',async(req,res)=>{
//     try{
//     const id =req.params.id;
//     await todoModel.findByIdAndDelete(id);
//     res.status(204).end();}
//     catch(error){
//         console.log(error);
//         res.status(500).json({message:error.message})
//     }

// })
// //Starting the port by choosing the port for making the server run
// const port=8000;
// //the call back function is used to check whether the port is initiated and running in 3000noide
// app.listen(port,()=>{
//     console.log("The server is listening to the port"+port)
// })
// //Update aroute

const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const { updateData } = require('moongose/controller/comments_controller');

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/mern-app1")
.then(()=>{console.log("DB Connected!")})
.catch((error)=>{console.log(error)})

//Starting the server
const port=8000;
app.listen(port,()=>{console.log("The server running on the port"+port)})

//Making a MongoDB schema that specifies the properties of fields and model to create 
//object of specified properties and interact with the by queries like create,delete,update

const todoSchema=new mongoose.Schema(
    {title:
        {
            type:String,
            required:true
        },
        description:String
    }

);
const todoModel=new mongoose.model("Todoone",todoSchema)


//Creating a todo by post 

app.post("/todos1",async (req,res) =>{
    const{title,description}=req.body;
    try{
        const newTodo=todoModel({title,description});
        await newTodo.save();
        res.status(201).json(newTodo);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

})

//Get all the todos
app.get("/todos1",async(req,res)=>{
    try{
        const todos1=await todoModel.find();
        res.json(todos1);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
//Update the required todo
app.put("/todos1:id",async(req,res)=>{
    const{id}=req.params.id;
    const{title,description}=req.body;
    try{
       updatedTodos= await todoModel.findByIdandUpdate(id,{title,description},{new:true});
       if(!updatedTodos){
        return res.status(404).json({message:"ToDo not found"})
       }
       res.json(updatedTodos)
    }
    catch(error){
        res.status(500).json({message:error.message})

    }
})
//Deleting the required todo
app.delete("todos1:id",async(req,res)=>{
    const {id}=req.params.id;
    try{
        await todoModel.findByIdandDelete(id);
        res.status(204).end();
    }catch(error){
        res.status(500).json({message:error.message})
    }
})