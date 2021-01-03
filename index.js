if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;
const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.static('Public'));
app.use(express.json());

app.post('/weather', (req, res) => {
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${apiKey}&units=metric`;
  axios({
    url: url,
    responseType: 'json'
  }).then(data => res.json(data.data))
});

app.listen(port, () => {
  console.log('Server Started...');
});
