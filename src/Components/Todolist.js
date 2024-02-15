import { useState } from "react";
import './Todolist.css'

const Todolist =()=>{
    const [tasks,settask]=useState(['Take Shower','Walking Dog','Pay Bils']);
    const[newtask,setnewtask]=useState("");
    const add_task=()=>{
        if(newtask!==""){
        settask([...tasks,newtask]);
        setnewtask("");
        }

    }
    const delete_task=(index)=>{
        const updatetaks=tasks.filter((element,i)=>i!==index);
        settask(updatetaks);

        }
    
    const moveup_task=(index)=>{
        if(index>0){
            const updatetasks=[...tasks];
            [updatetasks[index],updatetasks[index-1]]=[updatetasks[index-1],updatetasks[index]];
            settask(updatetasks);
        }

    }
    const movedown_task=(index)=>{
        if(index<tasks.length-1){
            const updatetasks=[...tasks];
            [updatetasks[index],updatetasks[index+1]]=[updatetasks[index+1],updatetasks[index]];
            settask(updatetasks);
        }

    }
    const inputchangeHandler=(event)=>{
        setnewtask(event.target.value);

    }
    return(
        <div className="todolist-div">
    
    <h1>ToDo-List</h1>
    <div>
        <input 
        type="text" 
        className="todolist-input"
        placeholder="َAdd New Task..."
        value={newtask}
        onChange={inputchangeHandler}
        />
        <button className="add-btn" onClick={add_task}> Add</button>
    </div>
    
    <ol>
        {tasks.map((task,index)=>
        <li key={index}>
            
            <span className="text">{task}</span>
                <button className="delete-btn" onClick={()=>delete_task(index)}>Delete</button>
                <button className="move-btn" onClick={()=>moveup_task(index)}>↥</button>
                <button className="move-btn" onClick={()=>movedown_task(index)}>↧</button>
            
        </li>)
        }
    </ol>
    </div>
   
    )

}
export default Todolist;