const express = require('express');
    
// const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({
        meta: {
            status: true,
            message: "Michel scott is the world's best boss!",
            code: 200
        }
    })
})

app.listen(port, () => console.log(`Server running successfully  on port number ${port}`));

module.exports = app;