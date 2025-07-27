const express = require("express");
const Todo=require("./models/todo");
const router=express.Router();

router.get("/todos", async (req,res) => {
    const todos=await Todo.find();

    res.status(200).json(todos);
});

router.post("/todos", async (req,res) => {
    // res.status(200).json({msg:"POST todos /api/todos"});
    const {task} = req.body;
    const newTodo = new Todo({task:task});

    await newTodo.save();
    res.status(201).json(newTodo);
});

router.put("/todos/:id", async (req,res) => {
    const { id } = req.params;
  const { task, status } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { task, status },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
});

router.delete("/todos/:id", async (req,res) => {
    const{id}=req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({msg:"DELETE todos /api/todos"});
});

module.exports = router;