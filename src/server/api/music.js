const express = require('express');
const musicRouter = express.Router();

const { getMusic, createMusic } = require('../db'); // Replace with your music database functions
const jwt = require('jsonwebtoken');

// Endpoint to retrieve music data
musicRouter.get('/', async (req, res, next) => {
  try {
    const music = await getMusic(); // Implement this function to retrieve music data from your database
    res.send({
      music,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// Endpoint to create music data
musicRouter.post('/create', async (req, res, next) => {
  const { artist_name, album_name, song_name, genre, album_cover_url } = req.body;

  try {
    // Implement your createMusic function to insert the music data into your database
    const music = await createMusic({
      artist_name,
      album_name,
      song_name,
      genre,
      album_cover_url,
    });

    res.send({
      message: 'Music data created successfully!',
      music,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = musicRouter;
