let $ = document;
let column1 = $.querySelector('.column1');
let hourContent = $.querySelector('#hourContent');
let Minute = $.querySelector('#Minute');
let SecondsContent = $.querySelector('#SecondsContent');
let time;
let hour;
let minute;
let seconds;
setInterval(function(){
    time = new Date();
    hour =  time.getHours();
    minute = time.getMinutes();
    seconds = time.getSeconds();
    if(hour > 9 && seconds > 9 && minute > 9){
        hourContent.innerHTML = hour;
        Minute.innerHTML =  minute;
        SecondsContent.innerHTML = seconds;
    }else if(hour < 10 && seconds > 9 && minute > 9){
        hourContent.innerHTML = '0' + hour;
        Minute.innerHTML = minute;
        SecondsContent.innerHTML = seconds;
    }else if(hour < 10 && seconds < 10  && minute > 9){
        hourContent.innerHTML = '0'+ hour;
        Minute.innerHTML =  minute;
        SecondsContent.innerHTML = '0' +seconds;
    }else if(hour < 10 && seconds > 9 && minute < 10){
        hourContent.innerHTML = '0'+ hour;
        Minute.innerHTML = '0' + minute;
        SecondsContent.innerHTML =seconds;
    }else if(hour > 9 && seconds < 10 && minute > 9){
        hourContent.innerHTML = hour;
        Minute.innerHTML =  minute;
        SecondsContent.innerHTML = '0'+ seconds;
    }else if(hour > 9 && seconds > 9  && minute < 10){
        hourContent.innerHTML = hour;
        Minute.innerHTML = '0'+  minute;
        SecondsContent.innerHTML = seconds;
    }
    else if(hour > 9 && seconds < 10  && minute < 10){
        hourContent.innerHTML = hour;
        Minute.innerHTML = '0'+  minute;
        SecondsContent.innerHTML = '0'+ seconds;
    }else{
        hourContent.innerHTML = '0'+  hour;
        Minute.innerHTML = '0'+  minute;
        SecondsContent.innerHTML = '0'+ seconds;
    }
    
},1000)