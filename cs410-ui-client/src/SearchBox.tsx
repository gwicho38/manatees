import { useState } from 'react';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');

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

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search..."
            />
            <br/>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBox;
