const db = require('./client');
const createMusic = async ({ artist_name, album_name, song_name, genre, album_cover_url }) => {
  try {
    const { rows: [music] } = await db.query(`
      INSERT INTO music (artist_name, album_name, song_name, genre, album_cover_url)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *`, [artist_name, album_name, song_name, genre, album_cover_url]);

    return music;
  } catch (err) {
    throw err;
  }
};

const getMusic = async () => {
  try {
    const { rows } = await db.query('SELECT * FROM music');
    return rows;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createMusic,
  getMusic,
};
