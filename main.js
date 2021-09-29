Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:99
});
var AF=document.getElementById("alfafa");
Webcam.attach(AF);

function snappic(){
    Webcam.snap(function(data_uri){
        document.getElementById("hay").innerHTML="<image id='l' src='"+data_uri+"'>";
    });
}