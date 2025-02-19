import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://6e26-103-165-209-242.ngrok-free.app/api',
    prepareHeaders: (headers) => {
        const accessToken = '';
        headers.set('Authorization', `Bearer ${accessToken}`);
    }
});

export default baseQuery