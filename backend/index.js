const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const culturalRoutes=require("./routes/culturalRoutes")
const historicRoutes=require("./routes/historicRoutes");
const tourismRoutes=require("./routes/tourismRoutes");


app.use(cors());
app.use(express.json());



app.use("/cultural",culturalRoutes)
app.use("/historic",historicRoutes)
app.use("/tourism",tourismRoutes)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});