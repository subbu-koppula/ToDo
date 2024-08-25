import { useEffect, useState } from "react";
import ToDo from "./ToDo/ToDo.jsx";
import Header from "./Header.jsx";
import "./App.css";

function App() {
  const [isDarkMode, setisDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
  };
  return (
    <div style={styles}>
      <div style={{ marginLeft: 8, marginRight: 8 }}>
        <Header setisDarkMode={setisDarkMode} isDarkMode={isDarkMode} />
        <div className="mainBody">
          <ToDo isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
