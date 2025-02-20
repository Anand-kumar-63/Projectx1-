const api_key = "AIzaSyA4xc0wMOsLqmPX02S4f-a-Rt6qM42c0ZM";
const maxResults = 40;
const playlistId = "PLGqWlKr6suTJdYlP1k9JPsqLJuXAJb-vT"
const youtube_api = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${playlistId}&maxResults=${maxResults}&key=${api_key}`;

export default youtube_api;
export {api_key};


