import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    prepareHeaders: (headers) => {
        const accessToken = 'isi dengan access token mu ';
        headers.set('Authorization', `Bearer ${accessToken}`);
    }
});