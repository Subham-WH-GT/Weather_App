

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata';
const url2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore';


// console.log(url3);

const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        temp.innerHTML = response.temp
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err));

fetch(url2, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        temps.innerHTML = response.temp
        humiditys.innerHTML = response.humidity
        min_temps.innerHTML = response.min_temp
        max_temps.innerHTML = response.max_temp
        wind_speeds.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err));
const form = document.getElementById('searchItem');
const submitButton = document.getElementById('citysearch');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = document.getElementById('yourcity').value;
    console.log(inputValue);
    const change = document.getElementById('cityName');
    change.innerHTML = inputValue;
    const url3 = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + inputValue;

    fetch(url3, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            yourtemp.innerHTML = response.temp
            yourhumidity.innerHTML = response.humidity
            yourmin_temp.innerHTML = response.min_temp
            yourmax_temp.innerHTML = response.max_temp
            yourwind_speed.innerHTML = response.wind_speed

            if(response.temp<20){
                const text=document.getElementById('ycitybtn');
                text.innerText="Lets prepare a Bonfire!"
                const bimage=document.getElementById('yourcitys');
                bimage.style.backgroundImage = "url('cool.webp')";

            }

            else if(response.temp==undefined){
                const text=document.getElementById('ycitybtn');
                text.innerText="Please ensure you spelled correctly or our API cannot reach!";
                const bimage=document.getElementById('yourcitys');
                bimage.style.backgroundImage = "url('what.avif')";
            }

            else{
                const text=document.getElementById('ycitybtn');
                text.innerText="Buy an Ice-cream for yourself!"
                const bimage=document.getElementById('yourcitys');
                bimage.style.backgroundImage = "url('warmg.jpg')";
            }

        })
        .catch(err => console.error(err));

})








