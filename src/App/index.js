import React from 'react';
import AppUI from './AppUI';
import { TodoProvider } from '../TodoContext'; 
//import './App.css';

function App() {
  
  React.useEffect(()=>{
    console.log("use effect")
  }, [])

  return (
    <TodoProvider>
        <AppUI />
    </TodoProvider>
  );
}

export default App;
