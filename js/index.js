async function findWeather() {
   try {
    let cityName=document.getElementById("city").value
    console.log(typeof(cityName));
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a02dafd90220b0a597a5e9903969975f`)
    console.log(res);
 
    str=``
    if(res.status==404){
        document.getElementById("Weather-details").innerHTML=`<h3 class="invalid">CITY NOT FOUND..!</h3>`
        document.getElementById("Weather-details").style.backgroundImage="url(./images/pexels-abdghat-1631677.jpg)"
        document.getElementById("Weather-details").style.objectFit="cover"
        document.getElementById("Weather-details").style.backgroundSize="cover";
        document.getElementById("Weather-details").style.backgroundPosition="cover";


      

    }

    else{
        let data=await res.json()
        console.log(data);

        document.getElementById("Weather-details").innerHTML=`
          <div class="temp">
        <div id="dates">
            <span ><h1>${Math.ceil(data.main.temp-273.15)}°C</h1>
            <h3>${data.weather[0].main} </h3></span>
        </div>
        <span ><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon" id="temp-icon"></span>
                       

      </div>
              <div class="Weather-detail">
                <h4 class="head">Weather <span id="Weather-des1">${data.weather[0].description} </span></h4>
                <h4>Humidity <span id="Weather-des2">${data.main.humidity} </span></h4>
                <h4>Wind <span id="Weather-des3">${data.wind.speed} </span></h4>
                <h4>Pressure <span id="Weather-des4">${data.main.pressure} </span></h4>
              </div>
              
               <div><h5 class="date" id="date"></h5></div>`

              let date=new Date()
                document.getElementById("date").textContent=` ${putZero(date.getDate())}-${putZero(date.getMonth()+1)}-${date.getFullYear()}`


                if(data.weather[0].main=="Clouds"){
                  document.getElementById("Weather-details").style.backgroundImage="url(./images/pexels-pixabay-355810.jpg)"
                  document.getElementById("Weather-details").style.objectFit="cover"
                  document.getElementById("Weather-details").style.backgroundSize="cover";
                  document.getElementById("Weather-details").style.backgroundPosition="cover";
                }
                
                else if(data.weather[0].main=="Rain"){
                  document.getElementById("Weather-details").style.backgroundImage="url(./images/rain.webp)"
                  document.getElementById("Weather-details").style.objectFit="cover"
                  document.getElementById("Weather-details").style.backgroundSize="cover";
                  document.getElementById("Weather-details").style.backgroundPosition="cover";
                }
                else if(data.weather[0].main=="Clear"){
                  document.getElementById("Weather-details").style.backgroundImage="url(./images/clear.webp)"
                  document.getElementById("Weather-details").style.objectFit="cover"
                  document.getElementById("Weather-details").style.backgroundSize="cover";
                  document.getElementById("Weather-details").style.backgroundPosition="cover";
                }
                else if(data.weather[0].main=="Haze"){
                  document.getElementById("Weather-details").style.backgroundImage="url(./images/haze.jpg)"
                  document.getElementById("Weather-details").style.objectFit="cover"
                  document.getElementById("Weather-details").style.backgroundSize="cover";
                  document.getElementById("Weather-details").style.backgroundPosition="cover";
                }
                else if(data.weather[0].main=="Thunderstorm"){
                  document.getElementById("Weather-details").style.backgroundImage="url(./images/thinderstorm.jpg)"
                  document.getElementById("Weather-details").style.objectFit="cover"
                  document.getElementById("Weather-details").style.backgroundSize="cover";
                  document.getElementById("Weather-details").style.backgroundPosition="cover";
                }
                else if(data.weather[0].main=="Snow"){
                  document.getElementById("Weather-details").style.backgroundImage="url(./images/snow.jpg)"
                  document.getElementById("Weather-details").style.objectFit="cover"
                  document.getElementById("Weather-details").style.backgroundSize="cover";
                  document.getElementById("Weather-details").style.backgroundPosition="cover";
                }
                else if(data.weather[0].main=="Atmosphere"){
                  document.getElementById("Weather-details").style.backgroundImage="url(./images/atmosphere.webp)"
                  document.getElementById("Weather-details").style.objectFit="cover"
                  document.getElementById("Weather-details").style.backgroundSize="cover";
                  document.getElementById("Weather-details").style.backgroundPosition="cover";
                }
                else{
                  document.getElementById("Weather-details").style.backgroundImage="url(./images/pexels-abdghat-1631677.jpg)"
                  document.getElementById("Weather-details").style.objectFit="cover"
                  document.getElementById("Weather-details").style.backgroundSize="cover";
                  document.getElementById("Weather-details").style.backgroundPosition="cover";
                }

                

    }

    
 
    
   } 
   
   catch (error) {
    console.log(error);
    
    
   }
    
    

    
 }

function putZero(time){
    return time<10?"0"+time:time

}

