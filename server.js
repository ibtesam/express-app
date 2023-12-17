require("dotenv").config()
const express = require('express')
const workoutRouter = require('./routes/workout')

// express app
const app = express()

// middleware (runs between us sending reqeust to the server and us responding back from the server).
app.use(express.json()) // middleware to read post and patch body, we can now access body in "req".

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// response (routes)
app.use("/api/workout", workoutRouter) // use workout controller

// listener
app.listen(process.env.PORT, () => {
    console.log("Listening on port ", process.env.PORT)
})


// response (routes)
// app.get("/workouts", (req, res) => {
//     res.json({ message: "Welcome Express js" })
// })