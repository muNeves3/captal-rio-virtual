var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
        

function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
}
