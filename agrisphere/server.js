const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
console.log("javaScript Connected!");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/crops', require('./routes/cropRoutes'));
app.use('/api/fertilizers', require('./routes/fertilizerRoutes'));
app.use('/api/markets', require('./routes/marketRoutes'));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
