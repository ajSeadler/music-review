const db = require('./client');
const { createUser } = require('./users');
const { createMusic } = require('./music'); // Import the createMusic function

const users = [
  {
    name: 'Emily Johnson',
    email: 'emily@example.com',
    password: 'securepass',
  },
  {
    name: 'Liu Wei',
    email: 'liu@example.com',
    password: 'strongpass',
  },
  // Add more user data as needed
];

const faker = require('faker');

const music = [
  {
    artist_name: 'The Electric Dreams',
    album_name: 'Binary Emotions',
    song_name: 'Digital Dreamscape',
    genre: 'Electronic',
    album_cover_url: 'public/electric.jpg',
  },
  {
    artist_name: 'Moonlit Serenades',
    album_name: 'Starry Night Sonata',
    song_name: 'Nocturnal Elegance',
    genre: 'Classical',
    album_cover_url: 'public/NE.jpg',
  },
  {
    artist_name: 'Groove Crusaders',
    album_name: 'Funky Groove Revolution',
    song_name: 'Groove Fusion Delight',
    genre: 'Funk',
    album_cover_url: 'public/tgc.jpg',
  },
  {
    artist_name: 'The Velvet Echoes',
    album_name: 'Soulful Whispers',
    song_name: 'Velvet Midnight Serenade',
    genre: 'Soul',
    album_cover_url: 'public/ve.jpg',
  },
  {
    artist_name: 'Cosmic Voyagers',
    album_name: 'Interstellar Dreams',
    song_name: 'Ethereal Journey',
    genre: 'Ambient',
    album_cover_url: 'public/cosvoy.jpeg',
  },
  {
    artist_name: 'Retro Beat Masters',
    album_name: '80s Synthwave Legends',
    song_name: 'Neon Nights',
    genre: 'Synthwave',
    album_cover_url: 'public/retrobeat.jpeg',
  },
  {
    artist_name: 'Jazz Legends Trio',
    album_name: 'Smooth Jazz Reverie',
    song_name: 'Saxophone Serenity',
    genre: 'Jazz',
    album_cover_url: 'public/jazztrio.jpeg',
  },
  {
    artist_name: 'Guitar Virtuosos',
    album_name: 'Acoustic Bliss',
    song_name: 'Fingerstyle Melodies',
    genre: 'Acoustic',
    album_cover_url: 'public/guitar.jpeg',
  },
  {
    artist_name: 'Rock Revolutionaries',
    album_name: 'Guitar Gods Unleashed',
    song_name: 'Thunderstruck Riffs',
    genre: 'Rock',
    album_cover_url: 'public/rockrev.jpeg',
  },
  {
    artist_name: 'Pop Sensations',
    album_name: 'Chart-Topping Hits',
    song_name: 'Pop Magic Explosion',
    genre: 'Pop',
    album_cover_url: 'public/psych.jpeg',
  },
  {
    artist_name: 'Bluesy Crooners',
    album_name: 'Delta Blues Chronicles',
    song_name: 'Muddy Waters Lament',
    genre: 'Blues',
    album_cover_url: 'public/bc.jpeg',
  },
  {
    artist_name: 'Reggae Vibes Collective',
    album_name: 'Island Groove Party',
    song_name: 'Sunny Reggae Skank',
    genre: 'Reggae',
    album_cover_url: 'public/weed.jpeg',
  },
  {
    artist_name: 'Country Road Trio',
    album_name: 'Nashville Nights',
    song_name: 'Country Sunset Ballad',
    genre: 'Country',
    album_cover_url: 'public/country.jpeg',
  },
  {
    artist_name: 'Hip-Hop Pioneers',
    album_name: 'Urban Rhyme Revolution',
    song_name: 'Streetwise Rhymes',
    genre: 'Hip-Hop',
    album_cover_url: 'public/hiphop.jpeg',
  },
  {
    artist_name: 'Metal Masters',
    album_name: 'Metal Mayhem',
    song_name: 'Headbanger\'s Anthem',
    genre: 'Metal',
    album_cover_url: 'public/metal.jpeg',
  },
];



const dropTables = async () => {
  try {
    await db.query(`
      DROP TABLE IF EXISTS users, music;
    `);
  } catch (err) {
    throw err;
  }
};

const createTables = async () => {
  try {
    await db.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) DEFAULT 'name',
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );

      CREATE TABLE music (
        id SERIAL PRIMARY KEY,
        artist_name VARCHAR(255) NOT NULL,
        album_name VARCHAR(255) NOT NULL,
        song_name VARCHAR(255) NOT NULL,
        genre VARCHAR(255) NOT NULL,
        album_cover_url VARCHAR(255) NOT NULL
      );
    `);
  } catch (err) {
    throw err;
  }
};

const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
    console.log('User data inserted successfully.');
  } catch (error) {
    console.error('Error inserting user data:', error);
  }
};

const insertMusicData = async () => {
  try {
    for (const musicItem of music) {
      await createMusic(musicItem);
    }
    console.log('Music data inserted successfully.');
  } catch (error) {
    console.error('Error inserting music data:', error);
  }
};

const seedDatabase = async () => {
  try {
    db.connect();
    await dropTables();
    await createTables();
    await insertUsers();
    await insertMusicData();
  } catch (err) {
    throw err;
  } finally {
    db.end();
  }
};

seedDatabase();
