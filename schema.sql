DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  text TEXT NOT NULL,
  published_at TEXT NOT NULL -- ISO string format
);

INSERT INTO posts (id, title, text, published_at) VALUES
(1, 'My First Post', 'Hello, this is my first post', '2025-04-10T00:00:00.000Z'),
(2, 'My Second Post', 'Hello, this is my second post', '2025-04-11T00:00:00.000Z');