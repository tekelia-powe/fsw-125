const express = require('express');
const todoRouter = express.Router();
const uuidV4 = require('uuid.v4');

const todo = [
    {
        title: "Finish shopping for Christmas",
        description: "Need to purchase items for Grandparents & Auntie Brandi",
        completed: true,
        _id: uuidV4()
    }
]

//Retrieves full list
todoRouter.get("/", (req,res, next) =>{
    res.send(todo);
    console.log("Get request received");
    next();
})
//Add new todo
todoRouter.post("/", (req, res, next) => {
    const newTodo = req.body;
    newTodo._id=uuidV4();
    todo.push(newTodo);
    res.send(`Successfully added Todo #${newTodo._id} to the database.`);
    console.log(`Added todo#${newTodo._id}`)

})

//Updates specific todo by id
todoRouter.put("/:todoId", (req, res, next) =>{
    const todoId = req.params.todoId;
    const todoIndex = todo.findIndex(oneTodo => oneTodo._id === todoId);
    const updatedTodo = Object.assign(todo[todoIndex], req.body);
    res.send(updatedTodo);
    console.log(`Updated todo #${todoId}`)
})
//Delete specific todo by id
todoRouter.delete("/:todoId", (req, res, next)=>{
    const todoId = req.params.todoId;
    const todoIndex = todo.findIndex(oneTodo => oneTodo._id === todoId);
    todo.splice(todoIndex,1);
    res.send(`Successfully deleted todo # ${todoId}`);
})
//Retrieve specifc todo by id
todoRouter.get("/:todoId", (req, res, next) =>{
    const todoId = req.params.todoId;
    const todoIndex = todo.findIndex(oneTodo => oneTodo._id === todoId); 
    res.send(todo[todoIndex])
    console.log(`Retrieved todo # ${(todoIndex) + 1}`)
})
module.exports = todoRouter