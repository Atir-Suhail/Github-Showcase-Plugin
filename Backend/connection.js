const mongoose = require('mongoose');
const url = "mongodb+srv://atirsuhail83:atir@cluster0.ricnubd.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log("Database Connected")
})
.catch((err) => {
    console.log(err);
    
});
module.exports = mongoose;