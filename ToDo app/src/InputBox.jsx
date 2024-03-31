import './InputBox.css';
import React, { useState } from 'react';

function InputBox(props){
    const [inputText, setInputText] = useState('');
    const handleInputChange = (event) => {
        setInputText(event.target.value); 
    };

    const handleButtonClick = () => {
        props.setTodos(prevTodos => [
            ...prevTodos,
            {
                title: inputText,
                id: Date.now(),
                done: false,
            }
        ]);
        console.log(inputText, props.Count); 

        props.setCount(props.Count+1);
        setInputText('');
    };

    return(
        <div className='input-container'>
        <input
        className='inputBox'
        placeholder="Enter text"
        onChange={handleInputChange}
        value={inputText}
        ></input>
        <button className='input-button' onClick={handleButtonClick}>Add</button>
        </div>
    );
}

export default InputBox