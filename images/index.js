async function findWeather() {
   try {
    let cityName=document.getElementById("city").value
    console.log(typeof(cityName));
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a02dafd90220b0a597a5e9903969975f`)
    console.log(res);
 
    str=``
    if(res.status==404){
        document.getElementById("invalid").innerHTML=`<h3 class="invalid">City Not Found..!</h3>`
      

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



                if(weather.weather[0].main=="Clouds"){
                    document.getElementById("weather").style.backgroundImage="url('./img/photorealistic-style-clouds.jpg')";
                    document.getElementById("weth").style.color="black";
                    document.getElementById("p1").style.color="gray";
                    document.getElementById("p2").style.color="gray";
                    document.getElementById("p3").style.color="gray";
                    document.getElementById("p4").style.color="gray";
                    document.getElementById("p5").style.color="gray";
                    document.getElementById("p6").style.color="gray";
                } 
                else if(weather.weather[0].main=="Rain"){
                    document.getElementById("weather").style.backgroundImage="url('./img/background-with-rain-dark-sky_1308-10107.avif')";
                    document.getElementById("weth").style.color="white";
                    document.getElementById("p1").style.color="black";
                    document.getElementById("p2").style.color="black";
                    document.getElementById("p3").style.color="black";
                    document.getElementById("p4").style.color="black";
                    document.getElementById("p5").style.color="black";
                    document.getElementById("p6").style.color="black";
                }
                // else if(weather.weather[0].main=="Snow"){
                //     document.getElementById("weather").style.backgroundImage="url('./img/christmas-snow-background_1048-12843.avif')";
                //     document.getElementById("p1").style.color="blue";
                //     document.getElementById("p2").style.color="blue";
                //     document.getElementById("p3").style.color="blue";
                //     document.getElementById("p4").style.color="blue";
                //     document.getElementById("p5").style.color="blue";
                //     document.getElementById("p6").style.color="blue";
                // } 
                // else if(weather.weather[0].main=="Atmosphere"){
                //     document.getElementById("weather").style.backgroundImage="url('./img/sky-landscape-background-with-clouds_23-2149134122.avif')";
                //     document.getElementById("weth").style.color="white";
                //     document.getElementById("p1").style.color="black";
                //     document.getElementById("p2").style.color="black";
                //     document.getElementById("p3").style.color="black";
                //     document.getElementById("p4").style.color="black";
                //     document.getElementById("p5").style.color="black";
                //     document.getElementById("p6").style.color="black";
                // } 
                // else if(weather.weather[0].main=="Clear"){
                //     document.getElementById("weather").style.backgroundImage="url('./img/beautiful-skyscape-daytime_23-2149265566.avif')"
                //     document.getElementById("weth").style.color="rgb(3, 17, 99)";
                //     document.getElementById("p1").style.color="black";
                //     document.getElementById("p2").style.color="black";
                //     document.getElementById("p3").style.color="black";
                //     document.getElementById("p4").style.color="black";
                //     document.getElementById("p5").style.color="black";
                //     document.getElementById("p6").style.color="black";
                // } 
                // else if(weather.weather[0].main=="Thunderstorm"){
                //     document.getElementById("weather").style.backgroundImage="url('./img/thunderstorm-city-nighttime_23-2151750424.avif')"
                //     document.getElementById("weth").style.color="white";
                //     document.getElementById("p1").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p2").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p3").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p4").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p5").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p6").style.color="rgb(219, 217, 217)";
                // } 
                // else if(weather.weather[0].main=="Clouds"){
                //     document.getElementById("weather").style.backgroundImage="url('./img/beautiful-flowers-seen-humidity-glass_23-2149453589.avif')"
                //     document.getElementById("weth").style.color="white";
                //     document.getElementById("p1").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p2").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p3").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p4").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p5").style.color="rgb(219, 217, 217)";
                //     document.getElementById("p6").style.color="rgb(219, 217, 217)";
                // }
                else{
                    document.getElementById("weather").style.backgroundImage="url('./img/beautiful-skyscape-daytime_23-2149265566.avif')"
                }
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

