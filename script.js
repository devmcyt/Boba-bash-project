
const videoUpload = document.getElementById('movie');
const captionUpload = document.getElementById('capts');
const myPlayer = document.getElementById('myPlayer');
const videoSource = document.getElementById('videoSource');
const captionTrack = document.getElementById('captionTrack');

[]
let currentVideoUrl = null;
let currentCaptionUrl = null;


videoUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    if (file) {
      
        if (currentVideoUrl) {
            URL.revokeObjectURL(currentVideoUrl);
        }
        
       
        currentVideoUrl = URL.createObjectURL(file);
        
        
        videoSource.src = currentVideoUrl;
        

        myPlayer.load();
    }
});


captionUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    if (file) {
    
        if (currentCaptionUrl) {
            URL.revokeObjectURL(currentCaptionUrl);
        }
        

        currentCaptionUrl = URL.createObjectURL(file);
        

        captionTrack.src = currentCaptionUrl;
    }
});