const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to videoElement

async function selectMediaStream(){
    try{
// screen capture API : whose job is to ask the user to select a screen or portion of a screen to capture in the form of a MediaStream.
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject = mediaStream;
videoElement.onloadedmetadata = ()=>{
    videoElement.play();
}
    }catch (error) {
// catch error here
console.log('whoops, error here:', error);
// above right custom messages help you to identify where the error is coming from.
    }
}

button.addEventListener('click',async() => {

    // disable button
    button.disabled =true;
// start picture in picture
await videoElement.requestPictureInPicture();
// reset button
button.disabled =false;
});
// On Load - execute the function 
selectMediaStream();