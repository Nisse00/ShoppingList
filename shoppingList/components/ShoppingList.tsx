import { useState } from 'react';
import ItemTextField from './ItemTextField';

export default function ShoppingList() {
    const [items, setItems] = useState<string[]>([]);

    const addItem = (item: string) => {
        // Add the new item to the list
        setItems(prevItems => [...prevItems, item]);
    };

    const removeItem = (index: number) => {
        // Remove the item from the list
        setItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1 style={{ color: 'Black' }}>Shopping List</h1>
            <h2 style={{ color: 'Black'}}>Add an item to your shopping list</h2>
            <ItemTextField onAddItem={addItem} />
            <ul style={{ listStyleType: 'none' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ fontSize: '20px', color: 'Blue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span>{item}</span>
                        <button onClick={() => removeItem(index)} style={{ marginLeft: '10px', fontSize: '12px', padding: '2px 6px' }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
