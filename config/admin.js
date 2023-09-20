module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',"6wTST32UqInNifjOzIgJlQ=="),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',"5jok9K1kjhvf+YdjEr9nSQ=="),
  },
});
