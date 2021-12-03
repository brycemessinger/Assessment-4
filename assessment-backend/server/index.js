const express = require("express");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller.js')

app.get('/api/memes', ctrl.getMeme)
app.post('/api/memes', ctrl.getMeme)
app.put('/api/memes/:id', ctrl.getMeme)
app.delete('/api/memes:id', ctrl.getMeme)


// start compliment code section
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];

// choose random compliment
let randomIndex = Math.floor(Math.random() * compliments.length);
let randomCompliment = compliments[randomIndex];

res.status(200).send(randomCompliment);
});
// end compliment code section



// Feature 1 Start
app.get("/api/fortune", (req, res) => {
  const fortunesList = ["Don’t confuse recklessness with confidence.",
					 "It’s time to get moving. Your spirits will lift accordingly.",
					 "Love lights up the world.",
           "Practice makes perfect.",
           "Well done is better than well said.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunesList.length);
  let randomFortune = fortunesList[randomIndex];

  res.status(200).send(randomFortune);
  
});
// Feature 1 End


// Feature 2 start






app.listen(4000, () => console.log("Server running on 4000"));




































// let printFortune = document.getElementById('fortuneButton').onclick = () => {
// axios.get("http://localhost:4000/api/fortune/")
// .then(function (response){
// let dataFortune = response.dataFortune;
// alert(dataFortune)
// })
// }