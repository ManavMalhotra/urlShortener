const mongoose = require('mongoose');

let uri = "mongodb+srv://admin:admin@cluster0.ovyh48b.mongodb.net/UrlShortner?retryWrites=true&w=majority";

mongoose.connect(uri,{
	useNewUrlParser: true, 
	useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', (error)=>{console.log(error)});

db.once('open', ()=>{console.log("Successfully conected to database")})