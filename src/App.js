import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './App.css';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/items/')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div className="App">
            <h1>Item List</h1>
            <ItemForm addItem={addItem} />
            <ItemList items={items} />
        </div>
    );
}

export default App;

