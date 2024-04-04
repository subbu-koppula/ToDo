import React, {useState, useEffect} from 'react';
import Input from './InputBox.jsx';
import Card from './Card.jsx';
import './ToDo.css';

function ToDo(props) {
    const [Todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem('Todos'));
        return savedTodos || [];
    });
    //The structure of each todo:
    // {
    //     title: inputText,
    //     id: Date.now(),
    //     done: false,
    // }

    
    useEffect(()=>{
        localStorage.setItem('Todos', JSON.stringify(Todos));
    },[Todos]);

    
    const [Count, setCount] = useState(0);    

    function handleDone(passedId){
        //This function takes an ID and then iterates through the Todos array. 
        //If it finds the object containing the id, then it toggles the state of "done" inside it. 

        setTodos(Todos.map(index => {
            if(index.id == passedId){
                return{...index, done: !index.done};
            }
            return index;
        }));
        console.log(Todos);
    };



    return (
        <div className='ToDo-container'>  
            <Input Todos={Todos} Count = {Count} setCount={setCount} setTodos = {setTodos}/>
            {Todos.length ? Todos.map((index) => (                
                !index.done ? <Card key={index.id} Count={Count} setCount={setCount} id={index.id} handleDone={handleDone} title={index.title} /> : null
            )) : null } 
        </div>
    );
}

export default ToDo;
