const interval_ms = 20000;

const images = [];
let counter = 0;

window.addEventListener("devicelight", (event)=>console.log(event.value))

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	setInterval(updateTime, 1000);

    const fileselector = document.getElementById("fileselector");
    fileselector.addEventListener("change", fileSelected);   

});

function fileSelected(event){
    console.log(event.target.files);
    for(const x of event.target.files){
        images.push(window.URL.createObjectURL(x));
    }

    console.log(images);
    updateImage();
    setInterval(updateImage, interval_ms);
    event.target.style.display = "none";

    const back = document.getElementById("back");
    const img = document.getElementById("image");
    document.body.addEventListener("click", moveClock);
    document.body.addEventListener("touchstart", moveClock);
}

function moveClock(event){
    console.log("move clock");
    back.style.position = "absolute";
    back.style.left = `${event.pageX - back.offsetWidth / 2}px`;
    back.style.top = `${event.pageY - back.offsetHeight / 2}px`;
}

function updateImage(){
    console.log("update");
    const imageArea = document.getElementById("image");
    imageArea.src = images[counter];
    counter ++;
    if(counter >= images.length){
        counter = 0;
    }
    // imageArea.style.opacity = 0.5;
}

function updateTime() {
    const realTime = new Date();
    const year = realTime.getFullYear();
    const month = "0" + (realTime.getMonth() + 1);
    const day = "0" + realTime.getDate();
    const hour = "0" + realTime.getHours();
    const minutes  = "0" + realTime.getMinutes();
    const seconds  = "0" + realTime.getSeconds();
    const text = hour.slice(-2) + ":" + minutes.slice(-2) + ":" + seconds.slice(-2);
    document.getElementById("real-time").innerHTML = text;
    document.getElementById("date").innerHTML = year + "." + month.slice(-2) + "." + day.slice(-2);
 }

