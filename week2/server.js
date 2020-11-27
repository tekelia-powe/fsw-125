//first express server

const express = require("express")
const app = express()

const movies =[
    {movieId: 1, name:"The Banker", movie_budget: "11 million"},
    {movieId: 2, name:"Love & Basketball", movie_budget: "15 million"},
    {movieId: 3, name:"Black Panther", movie_budget: "200 million"}
]

const actors =[
    {id: 1, name:"Chadwick Boseman", age: 44, movies:["Black Panther", "The Banker", "Marshall"]},
    {id: 2, name:"Micheal B. Jordan", age: 33, movies:["Black Panther", "Creed","Just Mercy"]},
    {id: 3, name:"Sanaa Lathan", age: 49, movies:["Love & Basketball", "The Best Man", "Something New"]}
]

const rel_year =[
    {movieId: 1, year: "2020"},
    {movieId: 2, year: "2000"},
    {movieId: 3, year: "2018"},
]
app.get("/movies", (req, res)=>{
    res.send(movies)})

app.get("/actors", (_req, res)=>{
    res.send(actors)})

app.get("/rel_year", (_req, res)=>{
    res.send(rel_year)})
    
app.listen(9000, ()=> {
    console.log("The server is running on Port 9000")
})
