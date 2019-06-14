//communication with outside API 

console.log("starting fetch call");
const photosPromise = fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fbd58be6b4f585662024b8f54c2d74f4&gallery_id=66911286-72157651066599621&format=json&nojsoncallback=1')
console.log("after fetch call");
console.log(photosPromise);
console.log("after it has run");

photosPromise
.then(data => data.json())
.then(data => {
    data.photos.photo.forEach((object) => {
        console.log(object);
    });
    console.log(data);
})



function createImages(images) {
    for (let i of imgs) {
        const image = document.createElement('img');
        image.setAttribute('photos', i.dowload_url);
        image.classList.add('loading');
        document.getElementById(div).appendChild(image);
    }
}

//the code above results to the json. ES6


//the code below is alternatives that supposedly could load the pictures by creating new elements
/*document.body.onload = addElement;
function addElement () {
    var newDiv = document.createElement('div');
    var newImage = document.createElement('img');
    newDiv.appendChild(newImage);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}*/

/*window.onload = () => {
    fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fbd58be6b4f585662024b8f54c2d74f4&gallery_id=66911286-72157651066599621&format=json&nojsoncallback=1')
        .then(function(response) {
            return response.json();
        })
            .then(function(myJson) {
                createImages(myJson);
                document.getElementById('container').append(image)
                .catch(err => {
                    console.log(err);
                });
            } */

            /*function photosResponse (rsp) {

                if (rsp.stat != "ok") {
                    return;
                }
            
                for (var i=0; i<rsp.photos.photo.length; i++) {
            
                var photo = rsp.photos.photo[i];
            
                var div = document.createElement ('div');
                var img = document.createElement ('img');
            
                div.appendChild(img);

                var element = document.getElementById(flex-container);
                element.appendChild(div);
                //document.body.appendChild(div);
                    }
            }


    /*var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" +today.getSeconds();
    var dateTime = date+' '+time;

    document.body.innerHTML="<p>Date:"+dateTime+"</p>"*/
