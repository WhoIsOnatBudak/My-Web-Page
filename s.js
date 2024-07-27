/*let cur =1;

showSlide(cur);

function changeSlide(n){
    cur+=n;
    showSlide(cur);
}
function showSlide(n){
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#999";
    }
    dots[n-1].style.backgroundColor = "black";
    slides[n-1].style.display = "block";
    cur = n;
}*/
//const apiUrl = 'http://api.travelpayouts.com/v1/prices/cheap?origin=IST&destination=AMS&depart_date=2024-09&return_date=2024-09&token=86808928e22299e8fd0e979cd1cb8294&currency=TRY&market=TR';


/*async function fetchFlightPrices() {
    
        
        const response = await fetch('http://api.travelpayouts.com/v1/prices/cheap?origin=IST&destination=AMS&depart_date=2024-09&return_date=2024-09&token=86808928e22299e8fd0e979cd1cb8294&currency=TRY&market=TR');
        

        

        const veri = await response.json();
        
        
        console.log(veri);

}*/

const theUrl = "http://api.travelpayouts.com/v1/prices/cheap?origin=IST&destination=AMS&depart_date=2024-09&return_date=2024-09&token=86808928e22299e8fd0e979cd1cb8294&currency=TRY&market=TR";

/*async function fetchFlightPrices(theUrl)
{

    const response = await fetch(theUrl, {
		method: 'GET',
		headers: {
			'Connection': 'keep-alive',
			'Accept-Encoding': 'gzip, deflate, br',
            //'Accept': ''
		},
	})
}
*/
fetch(theUrl)
  .then((response) => response.json())
  .then((json) => console.log(json));
