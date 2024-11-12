import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
  res.render("index.ejs")
})




app.post("/submit", (req, res) => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    const day = weekday[today.getDay()];

    let type = "A WeekDay";
    let adv = "Its time to Work Hard!"
    if (["Monday","Tuesday","Wednesday","Thursday","Friday"].includes(day)) {
      type = "A WeekDay";
      adv = "Its time to Work Hard!"
    } else {
      type = "A Weekend";
      adv = "It's time to Enjoy!"
    }

    const username = req.body.name;

    
    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit'});
    
    res.render("index1.ejs", {
      
      dayType: type,
      advice: adv,
      today: day,
      name: username,
      nowTime: `${currentTime}`,
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });