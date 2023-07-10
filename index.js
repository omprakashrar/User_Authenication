require('dotenv').config();

const PORT = process.env.PORT || 5002;

//require port
const app = require('./app.js')

//post running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
