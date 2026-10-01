const express = require("express");
const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Rahul",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Aman",
        branch: "IT"
    }
];

// GET - Home
app.get("/", (req, res) => {
    res.send("students API is running");
});

// GET - All students
app.get("/students", (req, res) => {
    res.json(students);
});

// POST - Add student
app.post("/students", (req, res) => {
    const newStudent = req.body;

    students.push(newStudent);

    res.json({
        message: "student added successfully",
        student: newStudent
    });
});

// DELETE - Delete student by ID
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully",
        student: student
    });
});

// Start Server
app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});
