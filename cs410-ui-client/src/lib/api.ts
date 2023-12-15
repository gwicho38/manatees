import axios from "axios"

export const make_get = async () => {
    try {
      // Define the API endpoint URL
      const apiUrl = 'http://localhost:8000/print_request'; // Replace with your API endpoint URL
  
      // Make the GET request to the API endpoint
      const response = await axios.get(apiUrl);
  
      // Handle the response data as needed
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error('Error:', error);
    }
  };
  