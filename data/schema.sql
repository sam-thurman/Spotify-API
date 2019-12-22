DROP TABLE spotify_test1;

CREATE TABLE IF NOT EXISTS spotify_test1
(
  id SERIAL PRIMARY KEY,
  song_name VARCHAR(100),
  artist VARCHAR(100),
  album VARCHAR(100),
  image_url TEXT,
  song_link TEXT
);

INSERT INTO spotify_test1 (song_name, artist) VALUES ('ATTENTION', 'Joji');

DROP TABLE soundcloud_test1;

CREATE TABLE IF NOT EXISTS soundcloud_test1
(
  id SERIAL PRIMARY KEY,
  song_name VARCHAR(100),
  artist VARCHAR(100),
  album VARCHAR(100),
  image_url TEXT,
  song_link TEXT
);

INSERT INTO soundcloud_test1 (song_name, artist) VALUES ('Allergic', 'Luke Banter');