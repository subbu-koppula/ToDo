import React, {useState} from 'react';
import Input from './InputBox.jsx';
import Card from './Card.jsx';
import './ToDo.css';

function ToDo(props) {
    const [Todos, setTodos] = useState('');
    const [Count, setCount] = useState(0);

    return (
        <div className='ToDo-container'>  
            <Input Todos={Todos} Count = {Count} setCount={setCount} setTodos = {setTodos}/>
            {Todos.length ? Todos.map((index) => (                
                !index.done ? <Card key={index.id} setCount={setCount} Count={Count} title={index.title} /> : null
            )) : null }
        </div>
    );
}

export default ToDo;
