$(document).ready(function(){

    $("#clockholder")
//ciferblatas
    let ciferblate = $("<div>");
    let d1 = 90;
    let d2 = 270;
    let wid = 15;
    for (let i = 1; i <= 12; i++) {
        if (d1 > 330) {d1 = 30;} else {d1+=30;};
        if (d2 < 30) {d2 = 330;} else {d2 = d2 - 30;};
        if (i > 9) {wid = 30};
        ciferblate.append("<div class='hours' style='transform: rotate(" + d1 + "deg);'><p class='pointer' style='transform: rotate(" + d2 + "deg);width: " + wid + "px'>"+ i +"</p></div>");

    };
    ciferblate.append("</div>")
    ciferblate.appendTo("#clockholder");
    console.log(ciferblate);




//rodykles

    let d = new Date();
    let sec = d.getSeconds();
    let min = d.getMinutes();
    let hr = d.getHours()
    console.log(hr);
    sec = parseInt(sec);
    let degsec = (sec + 15) * 6;
    min = parseInt(min);
    let degmin = (min + 15) * 6;
    hr = parseInt(hr);
    let deghr = (hr % 12) * 30 + 90 + Math.round(min / 60 * 30);
    ciferblate.append("<div id='arrow-sec-holder'><div id='arrow-sec'></div></div>");
    ciferblate.append("<div id='arrow-min-holder'><div id='arrow-min'></div></div>");
    ciferblate.append("<div id='arrow-hr-holder'><div id='arrow-hr'></div></div>");
    let asec = $("#arrow-sec-holder");
    let amin = $("#arrow-min-holder");
    let ahr = $("#arrow-hr-holder");

    asec.css('transform', 'rotate(' + degsec + 'deg)');
    amin.css('transform', 'rotate(' + degmin + 'deg)');
    ahr.css('transform', 'rotate(' + deghr + 'deg)');
    $("#clockholder").css('display','block');


    setInterval(function() {
        if (sec == 59) {
            sec = 0;
            min ++;
            degmin+=6;
            if (min % 2 == 0) {
                deghr += 1;
            };
        } else {
            sec++;
        };

        degsec+=6;

        if (min == 59) {
            min = 0;
            if (hr == 23) {
                hr = 0;
            } else {
            hr++;
            };
        };


        asec.css('transform', 'rotate(' + degsec + 'deg)');
        amin.css('transform', 'rotate(' + degmin + 'deg)');
        ahr.css('transform', 'rotate(' + deghr + 'deg)');


    }, 1000);


    });
