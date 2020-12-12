// import Cors from "cors";
// import express from "express";
// import mongoose from "mongoose";
// import chars from "./models/dbChars.js";


// // App Config



// const app = express();
// const port = process.env.PORT || 8001;


// const connection_url =
//     "mongodb+srv://admin:d0TbveqRyEBv3KIF@cluster0.gjhhs.mongodb.net/genshin?retryWrites=true&w=majority";


// // Middlewares

// app.use(express.json());
// app.use( Cors() );



// //Db Config



// mongoose.connect ( connection_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// } );




// // //API Endpoints

// app.get( "/", ( req, res ) => res.status( 200 ).send( "hello Genshin players") );


// app.post( "/genshin/chars", ( req, res ) => {
   
//     const dbChars = req.body;
    
//     chars.create( dbChars, ( err, data ) => {
//         if ( err ) {
//             res.status( 500 ).send( err )
//         } else {
//             res.status( 201 ).send( data )
//         }
//     } )
// } );

// app.get( "/genshin/chars", ( req, res ) => {
   
 
//        chars.find(( err, data ) => {
//         if ( err ) {
//             res.status( 500 ).send( err )
//         } else {
//             res.status( 200 ).send( data )
//         }
//     } )
// } );


// //Listener
// app.listen( port, () => console.log( `listening on localhost: ${port}` ) );

import express from "express";
import mongoose from "mongoose";
import Chars from "./dbChars.js";
import Cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
	"mongodb+srv://admin:aS0pKLDRXksYLqIo@cluster0.gjhhs.mongodb.net/genshin?retryWrites=true&w=majority";
// Middlewares
app.use( express.json() );
app.use( Cors() );  

//DB config
mongoose.connect( connection_url, {
    useNewUrlParser: true,  
    useCreateIndex: true,
    useUnifiedTopology: true,
} )

// API Endpoints
app.get( "/", ( req, res ) => res.status( 200 ).send( "hello clever programmers") );

app.post( "/create", ( req, res ) => {
    const dbChars = req.body;
    
   Chars.create( dbChars, (err,data) => {
        if ( err ) {
            res.status( 500 ).send( err )
        } else {
            res.status( 201 ).send( data )
        }
    } )     
} );

app.post( "/create", ( req, res ) => {
    const dbChars = req.body;
    dbChars.save().then( ( dbChars ) => {
        res.json( dbChars )
    } ).catch( err => {
        res.status( 500 ).send( err.message );
    } )

} );

app.get( "/:id", ( req, res ) => {
    const id = req.params.id;
    Chars.findById( id, ( err, todo ) => {
        res.json( todo );
    } );

} );


app.get( "/genshin/chars", ( req, res ) => {

    Chars.find(( err, data ) => {
        if ( err ) {
            res.status( 500 ).send( err )
        } else {
            res.status( 200 ).send( data )
        }
    } )
} );

//Listener  
app.listen( port, () => console.log( `listening on localhost: ${port}` ) );
