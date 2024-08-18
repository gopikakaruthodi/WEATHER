async function findWeather() {
    try {
     let cityName=document.getElementById("city").value
    //  console.log(typeof(cityName));
     const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a02dafd90220b0a597a5e9903969975f`)
    //  console.log(res);
  
     str=``
     if(res.status==404){
         document.getElementById("main-body-img").innerHTML=`<h3 class="invalid">CITY NOT FOUND..!</h3>`
         document.getElementById("main-body-img").style.backgroundImage="url(./images/pexels-abdghat-1631677.jpg)"
         document.getElementById("main-body-img").style.objectFit="cover"
         document.getElementById("main-body-img").style.backgroundSize="cover";
         document.getElementById("main-body-img").style.backgroundPosition="cover";
         document.getElementById("main-body-img").style.width="100%";           
         document.getElementById("main-body-img").style.height="100%";  
 
 
       
 
     }
 
     else{
         let data=await res.json()
         console.log(data);
        

         document.getElementById("content").innerHTML=`<h2 style="color: white;">${data.name}</h2>
         <h5 class="date" id="date"></h5>`
        document.getElementById("tempr").innerHTML=
        `<div id="temp">
        <span ><h1>${Math.ceil(data.main.temp-273.15)}°C</h1>
             <h3>${data.weather[0].main} </h3></span>
              <span ><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon" id="temp-icon"></span>
        </div>`


         document.getElementById("main-body-img").innerHTML=`
       </div>
               <div class="Weather-detail">
                 <h4 class="heads">Weather <span id="Weather-des1">${data.weather[0].description} </span></h4>
                 <h4>Humidity <span id="Weather-des2">${data.main.humidity} </span></h4>
                 <h4>Wind <span id="Weather-des3">${data.wind.speed}  km/h</span></h4>
                 <h4>Pressure <span id="Weather-des4">${data.main.pressure} Pa</span></h4>
               </div>
               
                `
 
               let imageHolder;
               let date=new Date()
                 document.getElementById("date").textContent=` ${putZero(date.getDate())}-${putZero(date.getMonth()+1)}-${date.getFullYear()}`
 
 
                 if(data.weather[0].main=="Clouds"){
                   imageHolder="url(./images/pexels-pixabay-355810.jpg)"
               
                 }
                 
                 else if(data.weather[0].main=="Rain"){
                   imageHolder="url(./images/rain.webp)"
              
                 }
                 else if(data.weather[0].main=="Clear"){
                   imageHolder="url(./images/clear.webp)"
                
                 }
                 else if(data.weather[0].main=="Haze"){
                imageHolder="url(./images/haze.jpg)"
                  
                 }
                 else if(data.weather[0].main=="Thunderstorm"){
                  imageHolder="url(./images/thinderstorm.jpg)"
                 
                 }
                 else if(data.weather[0].main=="Snow"){
                   imageHolder="url(./images/snow.jpg)"
              
                 }
                 else if(data.weather[0].main=="Atmosphere"){
                   imageHolder="url(./images/atmosphere.webp)"
                
                 }
                 else{
                   imageHolder="url(./images/pexels-abdghat-1631677.jpg)"
                  
                 }
                 document.getElementById("main-body-img").style.backgroundImage=imageHolder
                 document.getElementById("main-body-img").style.objectFit="cover"
                 document.getElementById("main-body-img").style.backgroundSize="cover";
                 document.getElementById("main-body-img").style.backgroundPosition="cover";           
                 document.getElementById("main-body-img").style.width="100%";           
                 document.getElementById("main-body-img").style.height="100%";

 
     }
     
    } 
    
    catch (error) {
     console.log(error);
     
     
    }
     
  }


 
 function putZero(time){
     return time<10?"0"+time:time
 
 }
 
 