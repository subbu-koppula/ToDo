import './InputBox.css';
import React, { useState } from 'react';

function InputBox(props){
    const [inputText, setInputText] = useState('');
    const handleInputChange = (event) => {
        setInputText(event.target.value); 
    };

    const handleButtonClick = () => {
        if(inputText.trim() !== ''){
        props.setTodos(prevTodos => [
            ...prevTodos,
            {
                title: inputText,
                id: Date.now(),
                done: false,
            }
        ])};
        
        props.setCount(props.Count+1);
        console.log(inputText, props.Count); 
        setInputText('');
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') handleButtonClick();
    }

    return(
        <div className='input-container'>
        <input
        className='inputBox'
        placeholder="Enter text"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={inputText}
        ></input>
        <button className='input-button' onClick={handleButtonClick}>Add</button>
        </div>
    );
}

export default InputBox