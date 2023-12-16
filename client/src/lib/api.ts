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
  
export const make_post = async(query: string) => {
    try {
        const response = await axios.post('http://localhost:8000/classify_query', { query });
  
        if (response.data && response.data.classification) {
          return response.data.classification;
        } else {
          return 'unclassified';
        }
      } catch (error) {
        console.error('Error:', error);
        return 'unclassified error';
      }
}