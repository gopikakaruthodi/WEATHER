function timer(){
    let date= new Date()
    hours=date.getHours()
    hr=hours%12==0?12:hours%12
    ampm=hours<12?"AM":"PM"
    document.getElementById("timer").textContent=`${putZero(hr)}-${putZero(date.getMinutes())}-${putZero(date.getSeconds())} ${ampm} ${putZero(date.getDay())}-${putZero(date.getMonth())}-${putZero(date.getFullYear())}`
    setTimeout(()=>{
        timer()
    },1000)

}

timer()



function displayBg(ampm){
    if(ampm=="AM"){
        document.getElementById("bg").style.backgroundImage()
    }

}

function putZero(time){
    return time<10?"0"+time:time

}