/** @format */

import express from "express";
import mongoose from "mongoose";
import Chars from "./models/dbChars.js";
import Cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
	"mongodb+srv://admin:aS0pKLDRXksYLqIo@cluster0.gjhhs.mongodb.net/genshin?retryWrites=true&w=majority";
// Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("hello clever programmers"));

app.post("/create", (req, res) => {
	const chars = Chars(req.body);
	chars
		.save()
		.then((chars) => {
			res.json(chars);
		})
		.catch((err) => {
			res.status(500).send(err.message);
		});
});

app.get("/:id", (req, res) => {
	const id = req.params.id;
	Chars.findById(id, (err, data) => {
		res.json(data);
	});
});

app.get("/genshin/chars", (req, res) => {
	Chars.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
} );

app.post( "/edit/:id", ( req, res ) => {
	const id = req.params.id
	
	Chars.findById( id, ( err, data ) => {
		if ( !data ) {
			res.status( 404 ).send( "Character Not found" )
		
		} else {
			data.text = req.body.text;
			data.save().then( data => {
				res.json( data );
			} ).catch( err => res.status( 500 ).send( err, message ) );
		}
	} )
})


//Listener
	app.listen( port, () => console.log( `listening on localhost: ${port}` ) );
