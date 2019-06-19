//fetching from outside API 

//console.log("starting fetch call");
const photosPromise = fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fbd58be6b4f585662024b8f54c2d74f4&gallery_id=66911286-72157651066599621&format=json&nojsoncallback=1')
//console.log("after fetch call");
console.log(photosPromise);
//console.log("end");

photosPromise
.then(data => data.json())
.then(data => {
    data.photos.photo.forEach((object) => {
        console.log(object);
        createImages(object);
    });
    console.log(data);
})

//JSON to image in html 
function createImages(image) {
    var img = document.createElement('img');
    var url = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';
    img.setAttribute('src', url);
    //console.log(image);
    const elem = document.getElementById('flex-container');
    console.log(elem);
    elem.appendChild(img);
    }

//Note URL constructor :https://www.flickr.com/services/api/misc.urls.html
//object DOM