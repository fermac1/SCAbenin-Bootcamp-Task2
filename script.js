
    var hourHand = document.getElementById ('hr');
    var minuteHand = document.getElementById('min');
    var secondHand = document.getElementById('sec');
    
    setInterval(setClock, 1000);

    function setClock(){

        var date = new Date();
        var second = (date.getSeconds() / 60);
        var minute = ((date.getMinutes() + second) / 60);
        var hour = ((date.getHours() + minute) / 12);
        
        hourHand.style.transform = "rotate(" + (hour *360) + "deg)";
        minuteHand.style.transform = "rotate(" + (minute *360) + "deg)";
        secondHand.style.transform = "rotate(" + (second *360) + "deg)";
    }

    setClock();

