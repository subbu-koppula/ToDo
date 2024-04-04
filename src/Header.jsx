import React from 'react';
import logoSvg from "./assets/logo.svg";

export default function Header(){
    const headerStyle = {
        width : '100%',
        display: 'flex',
        height: '50px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: '#CECFCF',
        borderWidth: '0 0 1px 0',
        marginBottom: '5px'
    }
    const styles = {
        fontFamily: "Arial",
        textAlign: "left",
        fontSize: '1.5rem',
        margin: '0',
        marginLeft: '5px',
        // marginLeft: '10px',
        display: 'inline',
    }
    return(
        <div style={headerStyle}>  
            <img src={logoSvg} alt="Logo" style={{ margin: '0', height: '25px' }} />
            <p style={styles}>ToDos</p>
        </div>
    )
}