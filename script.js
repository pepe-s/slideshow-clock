const images = [];
let counter = 0;

function fileSelected(event){
    console.log(event.target.files);
    for(const x of event.target.files){
        images.push(window.URL.createObjectURL(x));
    }

    console.log(images);
    updateImage();
    setInterval(updateImage, 3000);
    event.target.style.display = "none"
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	setInterval(updateTime, 1000);
    document.getElementById("fileselector").addEventListener("change", fileSelected);

});


function updateImage(){
    console.log("update");
    const imageArea = document.getElementById("image");
    imageArea.src = images[counter];
    counter ++;
    if(counter >= images.length){
        counter = 0;
    }
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