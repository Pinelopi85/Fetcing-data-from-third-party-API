//communication with outside API 

console.log("starting fetch call");
const photosPromise = fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fbd58be6b4f585662024b8f54c2d74f4&gallery_id=66911286-72157651066599621&format=json&nojsoncallback=1')
console.log("after fetch call");
console.log(photosPromise);
console.log("end");

photosPromise
.then(data => data.json())
.then(data => {
    data.photos.photo.forEach((object) => {
        console.log(object);
        createImages(object);
    });
    console.log(data);
})

function createImages(image) {
    var img = document.createElement('img');
    var url = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';
    img.setAttribute('src', url);
    //console.log(image);
   // var img = document.createElement('img');
    const elem = document.getElementById('flex-container');
    console.log(elem);
    elem.appendChild(img);
    }
/*functioning code
function createImages(image) {
    const url = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';
  //console.log(url);
    const img = document.createElement("img");
    img.setAttribute('src', url);
  //document.appendChild(img);
    const elem = document.querySelector('#flex-container');
  //console.log(elem);
    elem.appendChild(img);
    //for (let i of data) {
        /*const object = document.createElement("img");
        
        object.setAttribute('src', url);
        document.appendChild(img);
    //}*/

/*pt 2 functioning rewritten
function createImages(image) {
    var img = document.createElement('img');
    var url = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';
    img.setAttribute('src', url);
    //console.log(image);
   // var img = document.createElement('img');
    const elem = document.getElementById('flex-container');
    console.log(elem);
    elem.appendChild(img);
}*/
