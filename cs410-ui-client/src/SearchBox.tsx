import { useState } from 'react';
import { useEffect } from 'react';
import { make_get, make_post } from './lib/api';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');
    const [queryGetSentButton, setQueryGetSentButton] = useState(false);
    const [queryPostSentButton, setQueryPostSentButton] = useState(false);

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
        if (queryGetSentButton) {
            make_get();
        }
        setQueryGetSentButton(false);
    }, [queryGetSentButton]);

    useEffect(() => {
        if (queryPostSentButton) {
            make_post(inputValue);
        }
        setQueryPostSentButton(false);
    }, [queryPostSentButton]);

    const handleGetButton = () => {
        // Update the buttonPressed state when the button is pressed
        console.log("SearchBox | handleGetButtonClick");
        setQueryGetSentButton(true);
    };

    const handlePostButton = () => {
        // Update the buttonPressed state when the button is pressed
        console.log("SearchBox | handlePostButtonClick");
        setQueryPostSentButton(true);
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
            <button onClick={handleGetButton}>Search Get Test</button>
            <button onClick={handlePostButton}>Search Post Test</button>
        </form>
    );
};

export default SearchBox;
