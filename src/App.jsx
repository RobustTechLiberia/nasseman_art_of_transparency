import React from 'react'
import HomePage from './Pages/Home.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from "flowbite-react";
import { lightTheme } from "../theme.js";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
         <HomePage />
      </ThemeProvider>
     
    )
  }
}

export default App
