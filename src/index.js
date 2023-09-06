import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//วงจรComponent=> Render : ComponentDidmount (first render)|Re-render :ComponentDidUpdate (Grown up)|DIE : unMount(ตอนหายจากจอ)

const App = ()=>{
  const [category,setCategoty] = useState("");
  const [count,setCount] =useState(0);
  //useEffect(()=>{},[]) //function,dependency array
  // useEffect(()=>console.log("Banana Effect"));//ทำงานหลัง Render & Re-render
  useEffect(()=>console.log("Banana Effect"),[category]);//ทำงานหลัง Render & Re-render ตอนตัวแปร state ที่เราใส่ใน Array (ในนี้จะทำงานตอน category เปลี่ยน)
  useEffect(()=>console.log("Count"),[count]);
  console.log("Render");
  return(
    <div>
      
        <h1>useEffect:{category||"Not select"}</h1>
      <div className="button__group">
        <button onClick={()=>setCategoty("Post")}>Post</button>
        <button onClick={()=>setCategoty("Photo")}>Photo</button>
        <button onClick={()=>setCategoty("TODO")}>Todo</button>
        <button onClick={()=>setCategoty("User")}>Users</button>
      </div>
      <ul className="list">
        <li className="list-item">item-1</li>
      </ul>
      <button onClick={()=>setCount(count+1)}>+</button>
      <div>{count}</div>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
);

