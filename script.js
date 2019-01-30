var clockDIV = document.getElementById("clockDIV");
var hexDiv = document.getElementById("hexDiv");

function TickTack() {
    var time=new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var normalizeHours = (Math.floor((hours/23.0)*255)).toString(16);
    var normalizeMinutes = (Math.floor((minutes/59.0)*255)).toString(16);
    var normalizeSeconds = (Math.floor((seconds/59.0)*255)).toString(16);

    if(normalizeHours.length==1)
    {
        normalizeHours="0"+normalizeHours;
    }
    if(normalizeMinutes.length==1)
    {
        normalizeMinutes="0"+normalizeMinutes;
    }
    if(normalizeSeconds.length==1)
    {
        normalizeSeconds="0"+normalizeSeconds;
    }

    if(hours<10)
    {
        hours="0"+hours;
    }
    if(minutes<10)
    {
        minutes="0"+minutes;
    }
    if(seconds<10)
    {
        seconds="0"+seconds;
    }

    clockDIV.innerHTML=hours+":"+minutes+":"+seconds;

    var hexColor = "#"+normalizeHours+normalizeMinutes+normalizeSeconds;
    hexDiv.innerHTML=hexColor;

    document.body.style.backgroundColor=hexColor;

}
TickTack();
setInterval(TickTack,1000);