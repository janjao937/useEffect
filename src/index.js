import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';

const BaseURL = "https://api.themoviedb.org/3";
const Token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGFmNjQ2N2JlNzA2ZTRiNzI0YzZjZmUwNmQwMmUyZiIsInN1YiI6IjY0ZjgxNzhmNWYyYjhkMDEzOWQwMGJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CdmbiR_pCCgyM8uQ9GrqMy9PMKlKAqO07ySRtL4I1vc";

const App =()=>{
  const [Keyword,setKeyword] = useState("");
  const [movieList,setMovieList] = useState([]);
  const [allPage,setAllPage] = useState(0);

  const OnChangeHandler = (e)=>{
    setKeyword(e.target.value);
   
  }

  const OnSubmitHandeler = async (e)=>{
    e.preventDefault();

    let url =`${BaseURL}/search/keyword?query=${Keyword}&page=1`;
    let option ={
      method:"GET",
      headers:{
        accept:"application/json",
        Authorization :`Bearer ${Token}`,
      }
  };
  
  try{
    const response = await fetch(url,option);
    const data = await response.json();
    setMovieList(data.results);
    setAllPage(data.total_pages);
    // const movie = data.results;
    
  }catch(error){
    console.log(error)
  }
  

}

  return(
    <div className="App">
      <div className="Header">
        <h1>Movie App</h1>
      </div>
      <form  onSubmit={OnSubmitHandeler} className="Search">
        <input onChange={(e)=>OnChangeHandler(e)} type="text" placeholder="Keyword" value={Keyword} />
        <button type="submit"> Search</button>
      </form>
      <div>

        {Array.from(Array(allPage).keys()).map((n,index) => (
          <button key={index}>{n + 1}</button>
        ))}
        
      </div>
      <div className="Movie-list">
         
        {movieList.map(e=><div key={e.id} className="Movie">{e.name }</div> )}
        
         
      </div>
    </div>
  );}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

