import React from 'react'
import HomePage from './Pages/Home.jsx'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css'
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
