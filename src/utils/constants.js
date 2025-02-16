const api_key = "AIzaSyCw9eOmRziBvp5ALYMHFkMIx1eRs04nbPM";
const maxResults = 40;
const playlistId = "PLGqWlKr6suTJdYlP1k9JPsqLJuXAJb-vT"
const youtube_api = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${playlistId}&maxResults=${maxResults}&key=${api_key}`;

export default youtube_api;



