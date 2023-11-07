import React, { useState, useEffect } from 'react';

const MusicList = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    // Fetch music data from your API
    fetch('/api/music') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setMusic(data.music))
      .catch((error) => console.error('Error fetching music data:', error));
  }, []);

  // Group music into rows with three cards per row
  const rows = [];
  for (let i = 0; i < music.length; i += 3) {
    rows.push(music.slice(i, i + 3));
  }

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light music-list">
      <div>
        <h1 className="mb-4 text-center albumh1">Current Albums</h1>
        {rows.map((row, rowIndex) => (
          <div className="row mb-5" key={rowIndex}>
            {row.map((track) => (
              <div key={track.id} className="col-md-4 mb-5 song-container">
                <div className="card bg-dark text-white song-container">
                  <img
                    src={track.album_cover_url}
                    className="card-img-top"
                    alt="Album Cover"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{track.song_name}</h5>
                    <p className="card-text">
                      Artist: {track.artist_name}
                      <br />
                      Album: {track.album_name}
                      <br />
                      Genre: {track.genre}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicList;
