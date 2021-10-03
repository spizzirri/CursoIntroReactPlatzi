import React from 'react';

function useLocalStorage(itemName){

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState([]);
    
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem = localStorageItem? JSON.parse(localStorageItem) : [];
          
          saveItem(parsedItem)
          setLoading(false)
        } catch(err){
          setError(true)
        }
      }, 1000)
    })
  
  
    const saveItem = (newItem) => {
      try{
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      }catch(err){
        setError(true);
      }
  
    }
  
    return {item, saveItem, loading, error};
  }

  export default useLocalStorage;