// src/components/api.js
import axios from 'axios';

// Base URL for your backend API
const BASE_URL = 'http://localhost:5000'; // Change this to your backend URL if different

// Function to assign a conductor and inspector
export const assignConductorInspector = async (conductor, inspector) => {
    try {
        const response = await axios.post(`${BASE_URL}/assign`, { conductor, inspector });
        return response.data; // Return the response data
    } catch (error) {
        throw error; // Throw error to be handled in the component
    }
};
