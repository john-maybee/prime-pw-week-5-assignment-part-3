console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {title, artist, yearPublished}
    return collection.push(album);
}

console.log(addToCollection('Mt. Joy', 'Mt. Joy', 2018));
console.log('This is my music collection: ', collection);
