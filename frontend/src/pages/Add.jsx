import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Add = () => {
    //{} one object [] array duh
    const [book, setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    });

    const navigate = useNavigate()

    //memorize this idk whats happening
    const handleChange = (e)=>{
        setBook(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    //async declares the function so no () are needed ig 
    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/books", book)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    console.log(book)
    //no () on the end of the function makes it a callback function 
  return (
    <div>
        <div className="form">
            <h1>Add New Book</h1>
            <input type="text" placeholder='title' onChange = {handleChange} name = 'title'/>
            <input type="text" placeholder='description' onChange = {handleChange} name = 'desc'/>
            <input type="number" placeholder='price'  onChange = {handleChange} name = 'price'/>
            <input type="text" placeholder='cover' onChange = {handleChange} name = 'cover'/>
            <button className = "formButton" onClick = {handleClick}>Add</button>
        </div>
       
    </div>
  )
}

export default Add