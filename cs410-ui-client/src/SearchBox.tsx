import { useState } from 'react';
import { useEffect } from 'react';
import { make_get } from './lib/api';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');
    const [buttonPressed, setButtonPressed] = useState(false);

    // Function to handle the change event
    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Here you can call a function to handle the search logic
        console.log('Search Term:', inputValue);
    };

    useEffect(() => {
        if (buttonPressed) {
            make_get();
        }
        setButtonPressed(false);
    }, [buttonPressed]);

    const handleButtonClick = () => {
        // Update the buttonPressed state when the button is pressed
        console.log("SearchBox | handleButtonClick");
        setButtonPressed(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search..."
            />
            <br/>
            <button type="submit" onClick={handleButtonClick}>Search</button>
        </form>
    );
};

export default SearchBox;
