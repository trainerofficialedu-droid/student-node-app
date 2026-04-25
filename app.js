const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>DevOps Node App Live from EC2 via GitHub Actions 🚀</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});