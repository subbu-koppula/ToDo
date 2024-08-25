import React from "react";
import logoSvg from "./assets/logoDark.svg";
import logo from "./assets/logoWhite.webp";

// function SvgLogo(props) {
//     return (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-6 w-6"
//         data-id={4}
        
//       >
//         <g fill= {props.isDarkMode?'white' : 'black'}>\
//             <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//             <path d="M22 4L12 14.01 9 11.01" />
//         </g>
//       </svg>
//     )
//   }

function SvgMenu(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
      height={25}
      width={25}
      onClick={props.onClick} 
    >
      <g fill= {props.isDarkMode?'white' : 'black'}>
        <path
          d="M95 4146c-67-29-105-106-91-181 9-47 59-102 104-115 26-8 785-10 2474-8l2437 3 27 21c53 39 69 71 69 134s-16 95-69 134l-27 21-2447 2c-2019 2-2452 0-2477-11zM95 2546c-67-29-105-106-91-181 9-47 59-102 104-115 26-8 785-10 2474-8l2437 3 27 21c53 39 69 71 69 134s-16 95-69 134l-27 21-2447 2c-2019 2-2452 0-2477-11zM95 946C28 917-10 840 4 765c9-47 59-102 104-115 26-8 785-10 2474-8l2437 3 27 21c53 39 69 71 69 134s-16 95-69 134l-27 21-2447 2c-2019 2-2452 0-2477-11z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </g>
    </svg>
  );
}

export default function Header(props) {
  const headerStyle = {
    width: "100%",
    display: "flex",
    height: "50px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#CECFCF",
    borderWidth: "0 0 1px 0",
    marginBottom: "5px",
  };
  const styles = {
    color: props.isDarkMode? 'white' : 'black',
    fontFamily: "Arial",
    textAlign: "left",
    fontSize: "1.5rem",
    margin: "0",
    marginLeft: "5px",
    marginRight: "auto",
    // marginLeft: '10px',
    display: "inline",
  };
  function handleisDarkMode() {
    console.log("isDarkMode has been changed." + props.isDarkMode);
    props.setisDarkMode(!props.isDarkMode);
  }
  return (
    <div style={headerStyle}>
      <img
        src={props.isDarkMode? logo : logoSvg}
        alt="Logo"
        style={{ marginLeft: "auto", height: "25px" }}
      />
      {/* <SvgLogo isDarkMode = {props.isDarkMode} /> */}
      <p style={styles}>ToDos</p>
      <SvgMenu isDarkMode = {props.isDarkMode} onClick={handleisDarkMode}/>
    </div>
  );
}
