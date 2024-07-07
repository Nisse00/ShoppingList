import React, { useState } from 'react';

interface ItemTextFieldProps {
    onAddItem: (item: string) => void;
}

export default function ItemTextField({ onAddItem }: ItemTextFieldProps) {
    const [item, setItem] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddItem();
        }
    };

    const handleAddItem = () => {
        onAddItem(item);
        setItem('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add an item"
                value={item}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleAddItem}>Add</button>
        </div>
    );
}