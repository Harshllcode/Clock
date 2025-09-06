// function generateTime() {
//     let hour = Math.floor((Math.random() * 24) + 1);
//     return hour;
// }

// function checkTime() {
//     let show = document.querySelector('#showTime');
//     let greet = document.querySelector('#greet');
//     generateTime();
//     let hour = generateTime() % 24;
//     let hours = String(hour).padStart(2, '0')
//     let period = hours >= 12 ? 'PM':'AM';
//     let timeText = `${hours} O' Clock ${period}`
//     show.innerText = timeText;
//     if (hour < 12 && hour >= 6) {
//         greet.innerText = `Good Morning`;
//     }
//     else if (hour >= 12 && hour < 18) {
//         greet.innerText = `Good Afternoon`;
//     }
//     else if (hour >= 18 && hour < 22) {
//         greet.innerText = `Good Evening`;
//     }
//     else {
//         greet.innerText = `Good Night`;
//     }
// }
let monthNames = [
    "January","February","March","April","May","June","July","August","September",
    "October","November","December"];
let dayNames=['Sunday',"Monday",'Tuesday','Wednesday','Thursday','Friday','Saturday']
function showTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let day = new Date().getDay();
    let date = new Date().getDate();
    let month= new Date().getMonth();
    let year = new Date().getFullYear();
    let time = {
        hr: hours,
        min: minutes,
        sec: seconds,
        day: day,
        date: date,
        month: month,
        year:year
    }
    return time;
}
function realTime() {
    let hrBox=document.querySelector('#hrBox')
    let minBox=document.querySelector('#minBox')
    let secBox=document.querySelector('#secBox')
    let am=document.querySelector('#am')
    setInterval(() => {
        let time=showTime();
        let date=String(time.date);
        let day=time.day;
        if(date==1){
            date +=`st`;
        }
        else if(day==2){
            date +=`nd`;
        }
        else if(day==3){
            date +=`rd`;
        }
        else{
            date +=`th`;
        }
        let month=time.month;
        let year=time.year;
        let hr = time.hr%24;
        let min = time.min;
        let sec = time.sec;
        let hrs = String(hr).padStart(2, '0')
        let mins = String(min).padStart(2, '0')
        let secs = String(sec).padStart(2, '0')
        let period = hr >= 12 ? 'PM':'AM';
        hrBox.innerText=hrs;
        minBox.innerText=mins;
        secBox.innerText=secs;
        am.innerText=period;
        document.querySelector('.day').textContent=dayNames[day];
        document.querySelector('.date').textContent=date;
        document.querySelector('.month').textContent=monthNames[month];
        document.querySelector('.year').textContent=year;
    })
}

realTime();
