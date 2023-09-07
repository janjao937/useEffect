import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//วงจรComponent=> Render : ComponentDidmount (first render)|Re-render :ComponentDidUpdate (Grown up)|DIE : unMount(ตอนหายจากจอ)

const App = ()=>{
  const [category,setCategoty] = useState("");
  const [count,setCount] =useState(0);
  const [currentList,setCurrentList] = useState([]);
  //useEffect(()=>{},[]) //function,dependency array
  // useEffect(()=>console.log("Banana Effect"));//ทำงานหลัง Render & Re-render
  useEffect(()=>{console.log("First render")},[]);//จะ render แค่หลังครั้งแรก
  useEffect(()=>{
    
    const fetchList = async ()=>{
      const BaseUrl ="https://jsonplaceholder.typicode.com"
      try{
        let response = await fetch(`${BaseUrl}/${category}`,
        {
          method:"GET",
        });
        let data = await response.json();
        console.log(data);
        setCurrentList(data);

      }catch(error){
        console.log(error);
      }
    }


   if(category !== "") fetchList();    //Call function

  },[category]);//ทำงานหลัง Render & Re-render ตอนตัวแปร state ที่เราใส่ใน Array (ในนี้จะทำงานตอน category เปลี่ยน) คล้ายๆ delegate 

  useEffect(()=>console.log("Count"),[count]);
  useEffect(()=>console.log("Count and Category"),[count,category]);

  console.log("Render");
  return(
    <div>
      
        <h1>useEffect:{category||"Not select"}</h1>
      <div className="button__group">
        <button onClick={()=>setCategoty("posts")}>Posts</button>
        <button onClick={()=>setCategoty("photos")}>Photos</button>
        <button onClick={()=>setCategoty("todos")}>Todos</button>
        <button onClick={()=>setCategoty("users")}>Users</button>

      <button onClick={()=>setCount(count+1)}>+</button>
      <div>{count}</div>
      <button onClick={()=>setCount(count-1)}>-</button>
      </div>

    

      <ul className="list">
        
        {/* {currentList.map((e)=><li className="list-item">{e}</li>)} */}
        {currentList.map((e)=><li key={e.id} className="list-item">{e.title||e.name||e.body}</li>)}
      </ul>
     
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
);

