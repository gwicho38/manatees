import { useState } from 'react'
import SearchBox from './SearchBox';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput);

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };
  
  if (searchInput.length > 0) {
  }

  return (
    <>
      <h1>CS 410 | Manatees</h1>
      <div className="card">
        <SearchBox />
      </div>
    </>
  )
}

export default App
