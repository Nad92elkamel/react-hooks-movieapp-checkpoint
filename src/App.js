import './App.css';
import React from 'react';
import {v4 as uuidv4} from 'uuid';
import Movielist from './components/Movielist';
import {useState, useEffect} from 'react';

function App() {

  const[movies,setMovies] = useState([
    {
      
      id :uuidv4(),
      name:"      The Amazing Spider-Man      ",
      image:"https://i.egycdn.com/pic/RHNhSUNlY21FbVRtdmNtRUVjbVlJYVB2Tmp2Y3Zj.jpg",
      rating :4,
      year:"2012",
    },
    {
      id :uuidv4(),
      name:"No Time to Die",
      image:"https://i.egycdn.com/pic/RHNhSUNlY21tbUVtVFlwcG1FY3ZjdmNtdmxtWVlJeA.jpg",
      rating :5,
      year:"2021",
    },
    {
      id :uuidv4(),
      name:"Spider-Man: No Way Home",
      image:"https://i.egycdn.com/pic/WmFwZndlY21tbWJtbXZOam1vUmN2Y2FtSWx3VEV2dGM.jpg",
      rating :5,
      year:"2021",
    },
    {
      id :uuidv4(),
      name:" Avengers: Infinity War ",
      image:"https://i.egycdn.com/pic/WmFwZndlY21UbW1qdk5IY212RWNtdmFjdGNja05keg.jpg",
      rating :8,
      year:"2018",
    },
    {
      id :uuidv4(),
      name:"Hacksaw Ridge ",
      image:"https://i.egycdn.com/pic/WmFwZndlY212bXZ2TmJtbW1tRWNsbWJQd1RqbUVtdmE.jpg",
      rating :5,
      year:"2016",
    },
    {
      id :uuidv4(),
      name:"Venom: Let There Be Carnage ",
      image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486493_so.jpg",
      rating :4,
      year:"2021",
    },
    ]);

    const [movie, setMovie] = useState({
      name: "",
      image: "",
      rating: "",
      year: "",
    });

  const[searchTerm,setsearchTerm]=useState('')
  const [rate, setRate] = useState(1)
  
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    setMovie('')
      };
    
      const handlonchange = (e)=>{
        setsearchTerm(e.target.value);
      }
 
  return (
   
    <div className="App">
    <h1 className='head'> Movie app</h1>
  
    <div className='search_movies'>
    <input className='search' type='text' placeholder="search..." onChange={handlonchange}/> 
    </div>

    <Movielist movies={movies.filter(el=>el.name.toLowerCase().includes(searchTerm.toLowerCase())&& el.rating >= rate)}/>

    <div className="add_Movies">
    <input type="text" placeholder="name" name="name"  onChange={ handleChange}></input>
    <input type="text" placeholder="rating" name="rating" onChange={ handleChange}></input>
    <input type="text" placeholder="year" name="year" onChange={ handleChange}></input>
    <input type="file"  placeholder="image" name="image" onChange={ handleChange} ></input>

    <button type="submit" onClick={handleSubmit}>Add</button>
   </div> 
    
  </div>
);
}
      
  
  
  

export default App;

