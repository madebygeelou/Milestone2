import React, { useState, useEffect } from 'react';

const searchBar = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('ReactJS');

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=5&key=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => setVideos(data.items))
      .catch(error => console.error('Error fetching data:', error));
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
