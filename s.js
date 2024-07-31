let cur =1;

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
        dots[i].style.backgroundColor = "#f5f5f5";
    }
    dots[n-1].style.backgroundColor = "#684545";
    slides[n-1].style.display = "block";
    cur = n;
}
//const apiUrl = 'http://api.travelpayouts.com/v1/prices/cheap?origin=IST&destination=AMS&depart_date=2024-09&return_date=2024-09&token=&currency=TRY&market=TR';


/*async function fetchFlightPrices() {
    
        
        const response = await fetch('http://api.travelpayouts.com/v1/prices/cheap?origin=IST&destination=AMS&depart_date=2024-09&return_date=2024-09&token=&currency=TRY&market=TR');
        

        

        const veri = await response.json();
        
        
        console.log(veri);

}*/

/*const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch('http://api.travelpayouts.com/v1/prices/cheap?origin=IST&destination=AMS&depart_date=2024-09&return_date=2024-09&token=
  &currency=TRY&market=TR', requestOptions)
    .then((response) => response.text())
    .then((result) => document.getElementById("pri").innerHTML = result)
    .catch((error) => console.error(error));*/
  

  //document.getElementById("pri").innerHTML = result;
