console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {title, artist, yearPublished}
    return collection.push(album);
}


console.log(addToCollection('Mt. Joy', 'Mt. Joy', 2018));
console.log('This is my music collection: ', collection); // trial

// add 6 albums
//------------------------------------------------------------------------------------------
addToCollection('Illinois', 'Sufjan Stevens', 2005);
addToCollection('Awaken, My Love!', 'Childish Gambino', 2016);
addToCollection('PUP', 'PUP', 2014);
addToCollection('Because the Internet', 'Childish Gambino', 2013);
addToCollection('Quadrophenia', 'The Who', 1973);
addToCollection('Good Thing', 'Leon Bridges', 2018);

console.log('This is my music collection: ', collection);

// showCollection Function:
//------------------------------------------------------------------------------------------
function showCollection(collection) {
    for(i = 0; i<collection.length; i++){
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }
    return console.log(collection.length);
}

showCollection(collection);

// name new function: findByArtist : take in artist as the string parameter
//------------------------------------------------------------------------------------------
function findByArtist(artistSearched){
    let artistResults = [];
    for (i = 0; i<collection.length; i++){
        if (collection[i].artist === artistSearched){
            console.log(artistResults.push(collection[i]));
        }
        // else {
        //     console.log(`artist not a match`);
        // }  : this else isn't needed, but can use if we want to see what albums arent by an artist.
    }
    return console.log(artistResults);
}

findByArtist('Childish Gambino');  // multiple in collection
findByArtist('Enya'); // not in collection item
findByArtist('Sufjan Stevens'); // one in collection

