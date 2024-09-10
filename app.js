const express = require('express');
const app = express();
const path = require('path');

app.use("/static", express.static(path.join(__dirname, 'public')));
app.get('/',
    (req,res)=>{
        res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
    }
)

const port = 3000 || 4000;
app.listen(port,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);
});