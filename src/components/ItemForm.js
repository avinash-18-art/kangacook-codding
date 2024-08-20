import React, { useState } from 'react';

function ItemForm({ addItem }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/items/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        })
            .then(response => response.json())
            .then(data => {
                addItem(data);
                setName('');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add a new item"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default ItemForm;
