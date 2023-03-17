
// function whereAmI(lat, long){
//     //'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key'

// }



const whereAmI = function(lat, lng){
    console.log("Latitude: ", lat, " Longitude: ", lng)
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=xml&auth=776933478307460537712x72293`)
        .then(response => console.log(response));
}




const lat1 = 52.508;
const lat2 = 19.037;
const lat3 = -33.933;

const long1 = 13.381;
const long2 = 72.873;
const long3 = 18.474;

whereAmI(lat1, long1);
// whereAmI(lat2,long2);
// whereAmI(lat3, long3);


