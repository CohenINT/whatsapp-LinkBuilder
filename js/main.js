
var text = "";
var phone_number = "";
var result_link = ""; //example: https://wa.me/972545538909?text=I'm%20interested%20in%20your%20car%20for%20sale


function onClickCreateLinkHandler() {

    var message = document.getElementById("msg").value;
    
    for (var i = 0; i < message.length; i++)
    {
        if (message[i] == " ") {
            message = message.replace(' ', "%20");
        }
    }
    phone_number = document.getElementById("phoneNum").value;
    var split = phone_number.split("");
    split[0] = "972";
    phone_number = "";
    for (var i = 0; i < split.length; i++) {
        phone_number += split[i];
    }

    text = message;
    result_link = "https://wa.me/" + phone_number + "?text=" + text;
    document.getElementById("res_link").value = result_link;



}

    