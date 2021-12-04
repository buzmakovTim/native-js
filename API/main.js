console.log("API  HTTP requests");

// For JavaScript
//
// 
// JQuery
// fetch() - build in in most modern browsers  
// axios   -  third party and we need to install a package for it
// XMLHttpRequest


// Here we gonna use fetch()

// curl "https://api.m3o.com/v1/crypto/History" \
// -H "Content-Type: application/json" \
// -H "Authorization: Bearer $M3O_API_TOKEN" \
// -d '{
//   "symbol": "BTCUSD"
// }'



var image = document.createElement("img").src = "https://cataas.com/cat/gif";
let button = document.getElementById('clickMe')
let catGif = document.getElementById('cat')

button.onclick = function(){
    console.log("Hey MAN! It's working!")


    fetch("https://cataas.com/cat/gif")
        .then(response => {
	        console.log(response);
            catGif.src = response.url;
        })
    .catch(err => {
	    console.error(err);
    }); 
    
}