const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());


app.post('/', async function(req, res, next) {
  try {
    let out = await Promise.all(req.body.developers.map(async dev => { const {data} = await axios.get(`https://api.github.com/users/${dev}`); return {name: data.name, bio: data.bio}; }));
    return res.json(out);
  } catch {
    next(err);
  }
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  return res.json({ error: err.message });
});

app.listen(3000, function () {
  console.log("Server starting on port 3000")
})