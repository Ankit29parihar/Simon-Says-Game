var body = document.querySelector("body");
var start = false
a


body.addEventListener("keypress", function(){
    if (start == false) {
        console.log("Game Started")
        start = true
    }
})