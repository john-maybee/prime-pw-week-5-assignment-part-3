console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {title, artist, yearPublished}
    return collection.push(album);
}


console.log(addToCollection('Mt. Joy', 'Mt. Joy', 2018));
console.log('This is my music collection: ', collection); // trial

addToCollection('Illinois', 'Sufjan Stevens', 2005);
addToCollection('Awaken, My Love!', 'Childish Gambino', 2016);
addToCollection('PUP', 'PUP', 2014);
addToCollection('Because the Internet', 'Childish Gambino', 2013);
addToCollection('Quadrophenia', 'The Who', 1973);
addToCollection('Good Thing', 'Leon Bridges', 2018);

console.log('This is my music collection: ', collection);

function showCollection(collection) {
    for(i = 0; i<collection.length; i++){
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }
    return console.log(collection.length);
}

showCollection(collection);

// name new function: findByArtist 