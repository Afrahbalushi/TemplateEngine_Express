const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  const title = 'Courses';
  const items = ['JavaScript', 'Java', '.Net', 'SpringBoot', 'GO'];
  res.render('index', { title, items });
});

app.listen(port, () => {
  console.log(`Server is running on ` + port);
});


