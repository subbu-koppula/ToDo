import React, {useState, useEffect} from 'react';
import Input from './InputBox.jsx';
import Card from './Card.jsx';
import FinishedCard from './FinishedCard.jsx';

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

    const converted = {
          borderStyle: "none",
          borderRadius: "10px",
          borderColor: "rgb(67, 69, 69)",
          borderWidth: "1px",
          minHeight: "200px",
          color: props.isDarkMode ? 'white' : 'black',
      }
      
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
    function handleSwapUp(passedId){
        const index = Todos.findIndex(todo => todo.id === passedId);
        if(index > 0){
            const updatedTodos = [...Todos];
            const temp = updatedTodos[index-1];
            updatedTodos[index-1] = updatedTodos[index]
            updatedTodos[index] = temp;
            setTodos(updatedTodos);
        }
        
    }
    function handleDelete(passedID){
        const updatedTodos = Todos.filter(todo => todo.id !== passedID);
        setTodos(updatedTodos);
    };


    return (
        <div style={converted}>  
            <Input Todos={Todos} isDarkMode={props.isDarkMode} setTodos = {setTodos}/>
            {Todos.length ? Todos.map((index) => (                
                !index.done ? <Card key={index.id} isDarkMode={props.isDarkMode} handleDelete={handleDelete} handleSwapUp = {handleSwapUp} id={index.id} done={index.done} handleDone={handleDone} title={index.title} /> : null
            )) : null } 
            <hr/>
            <FinishedCard Todos={Todos} isDarkMode={props.isDarkMode} handleDelete={handleDelete} handleDone={handleDone}/>
        </div>
    );
}

export default ToDo;
