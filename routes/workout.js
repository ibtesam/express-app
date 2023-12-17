const express = require("express")

const router = express.Router()

// GET all workout.
router.get("/", (req, res) => {
    res.json({ message: "GET all workout list" })
})

// ADD single workout
router.post("/", (req, res) => {
    res.json({ message: "ADD single workout" })
})

// GET single workout
router.get("/:id", (req, res) => {
    res.json({ message: "GET single workout" })
})

// DELETE single workout
router.delete("/:id", (req, res) => {
    res.json({ message: "DELETE single workout" })
})

// UPDATE single workout
router.patch("/:id", (req, res) => {
    res.json({ message: "UPDATE single workout" })
})

module.exports = router