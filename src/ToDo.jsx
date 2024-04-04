import React, {useState, useEffect} from 'react';
import Input from './InputBox.jsx';
import Card from './Card.jsx';
import FinishedCard from './FinishedCard.jsx';
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

    
       

    function handleDone(passedId){
        //This function takes an ID and then iterates through the Todos array. 
        //If it finds the object containing the id, then it toggles the state of "done" inside it. 

        setTodos(Todos.map(index => {
            if(index.id == passedId){
                return{...index, done: !index.done};
            }
            return index;
        }));
        // console.log(Todos);
    };
    function handleDelete(passedID){
        const updatedTodos = Todos.filter(todo => todo.id !== passedID);
        setTodos(updatedTodos);
    };


    return (
        <div className='ToDo-container'>  
            <Input Todos={Todos} setTodos = {setTodos}/>
            {Todos.length ? Todos.map((index) => (                
                !index.done ? <Card key={index.id} handleDelete={handleDelete} id={index.id} done={index.done} handleDone={handleDone} title={index.title} /> : null
            )) : null } 
            <hr/>
            <FinishedCard Todos={Todos} handleDelete={handleDelete} handleDone={handleDone}/>
        </div>
    );
}

export default ToDo;
