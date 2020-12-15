
export const getChars = () => fetch( "http://localhost:8001/genshin/chars" ).then( res => res.json() );

export const createChars = (data) => fetch( "http://localhost:8001/create", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
} );

export const getChar = ( id ) => fetch( `http://localhost:8001/${id}` ).then( res => res.json() ).catch( err => console.log( err ));