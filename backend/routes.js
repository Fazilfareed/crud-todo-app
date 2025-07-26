const express = require("express");

const router=express.Router();

router.get("/todos", (req,res) => {
    res.status(200).json({msg:"GET todos /api/todos"});
});

router.post("/todos", (req,res) => {
    res.status(200).json({msg:"POST todos /api/todos"});
});

router.put("/todos/:id", (req,res) => {
    res.status(200).json({msg:"PUT todos /api/todos"});
});

router.delete("/todos/:id", (req,res) => {
    res.status(200).json({msg:"DELETE todos /api/todos"});
});

module.exports = router;