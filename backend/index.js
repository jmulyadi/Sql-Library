import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("Hello bro");
});

//need to install cors to allow accessing the backend from the frontend or axios
app.use(express.json());
app.use(cors());

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`price`, `cover`) VALUES (?)";
  const val = [req.body.title, req.body.desc, req.body.price, req.body.cover];

  db.query(q, [val], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book Has been put in the Database");
  });
});

app.delete("/books/:id", (req, res)=> {
  const bookId = req.params.id
  const q = "DELETE FROM books WHERE id = ?"
  db.query(q, [bookId], (err,data)=>{
    if (err) return res.json(err);
    return res.json("Book Has been DELETED in the Database");
  })
})

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";
  const val = [req.body.title, req.body.desc, req.body.price, req.body.cover, bookId];
  db.query(q, val, (err, data) => {
    if (err) return res.json(err);
    return res.json("Book Has been UPDATED in the Database");
  });
});

app.listen(8800, () => {
  console.log("Connected to Bakend");
});

//point of nodemon is like vite so it updates easily
