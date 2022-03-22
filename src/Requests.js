const API_KEY = '53ef5f1fc09cf34375c074568d7f94d8';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

}

export default requests;