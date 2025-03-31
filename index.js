const express = require('express'); // Import express
const path = require('path'); // Import path

const app = express(); // Call express via app
const PORT = process.env.PORT || 4000;

// Sample task list (Local Storage - In-memory)
let taskList = [
    {
        id: 1,
        desc: "Go to gym",
        category: "Personal",
        date: '2025-02-22'
    },
    {
        id: 2,
        desc: "Go to school",
        category: "School",
        date: '2024-03-22'
    },
    {
        id: 3,
        desc: "Go to market",
        category: "Work",
        date: '2024-02-22'
    }
];

// Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Include static files
app.use(express.static('assets'));

// Controller - Home Route (Show Tasks)
app.get('/', (req, res) => {
    return res.render('home', {
        title: "To Do List App",
        todo_list: taskList
    });
});

// Add a new task (Local Storage)
app.post('/create-list', (req, res) => {
    const newTask = {
        id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1, // Auto-increment ID
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date
    };

    taskList.push(newTask);
    console.log('New task added:', newTask);
    return res.redirect('/');
});

// Delete a task (Local Storage)
app.get('/delete-task', (req, res) => {
    const taskId = parseInt(req.query.id);
    taskList = taskList.filter(task => task.id !== taskId);
    
    console.log('Task deleted successfully');
    return res.redirect('/');
});

// Server
app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
