let songIndex = 0;
let audioElement = new  Audio('songs/music.mp3');
let masterPlay  =  document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSong  =  document.getElementById('masterSong');

let songs = [

        {songName : "Love Story", filePath : "songs/music.mp3", coverPath : "covers/Love_Story.png"},
        {songName : "Back To December", filePath : "songs/BackToDecember.mp3", coverPath : "covers/download.1.jpg"},
        {songName : "Fearless", filePath : "songs/Fearless.mp3", coverPath : "covers/download.2.jpg"},
        {songName : "You Belong With Me", filePath : "songs/YouBelongWithMe.mp3", coverPath : "covers/download.3.jpg"},
        {songName : "ShakeItOff", filePath : "songs/ShakeItOff.mp3", coverPath : "covers/download.4.jpg"},
]
heart.addEventListener('click', ()=>{
      
        
                heart.classList.remove('fa-heart');
                heart.classList.add('fa-star');
      
                heart.addEventListener('click', ()=>{
      
                        heart.classList.remove('fa-star');
                        heart.classList.add('fa-heart');

        } )       
               
 } )         
 songItems.forEach((element, i)=>{
      
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        })

 masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
                audioElement.play();  
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                gif.style.opacity = 1;
        }
        else
        {
                audioElement.pause();  
                masterPlay.classList.remove('fa-circle-pause');   
                masterPlay.classList.add('fa-circle-play');
                gif.style.opacity = 0;    
        }
 } )   
audioElement.addEventListener('timeupdate',()=>{      
progress = parseInt((audioElement.currentTime/audioElement.duration) *100 );
myProgressBar.value = progress;
}) 
  myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
  })
 const makeAllPlays =() =>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
               
                element.classList.remove('fa-circle-pause');
             element.classList.add('fa-circle-play');
             
        })
 } 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    masterSong.innerText=songs[songIndex].songName;
    songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
//audioElement.src = `songs/${index+1}.mp3 `;
if(songIndex==0)
{
        audioElement.src="songs/music.mp3";
        masterSong.innerText=songs[songIndex].songName;
}
else if(songIndex==1)
{
        audioElement.src="songs/BackToDecember.mp3"; 
        masterSong.innerText=songs[songIndex].songName;   
}
else if(songIndex==2)
{
        audioElement.src="songs/Fearless.mp3" ;  
        masterSong.innerText=songs[songIndex].songName; 
}
else if(songIndex==3)
{
        audioElement.src="songs/YouBelongWithMe.mp3" ; 
        masterSong.innerText=songs[songIndex].songName;  
}
else{
        audioElement.src="songs/ShakeItOff.mp3" ;
        masterSong.innerText=songs[songIndex].songName;    
}
audioElement.currentTime = 0;

audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');   
 masterPlay.classList.add('fa-circle-pause');
})
})
document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=4)
        {
          songIndex=0;   
        }
        else{
                songIndex+=1;   
        }
if(songIndex==0)
{
        audioElement.src="songs/music.mp3";
        masterSong.innerText=songs[songIndex].songName;
}
else if(songIndex==1)
{
        audioElement.src="songs/BackToDecember.mp3";    
        masterSong.innerText=songs[songIndex].songName;
}
else if(songIndex==2)
{
        audioElement.src="songs/Fearless.mp3.mp3";    
        masterSong.innerText=songs[songIndex].songName;
}
else if(songIndex==3)
{
        audioElement.src="songs/YouBelongWithMe.mp3";   
        masterSong.innerText=songs[songIndex].songName; 
}
else{
        audioElement.src="songs/ShakeItOff.mp3";   
        masterSong.innerText=songs[songIndex].songName;  
}
//masterSong.innerText=songs[songIndex].songName;
audioElement.currentTime = 0;

audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');   
 masterPlay.classList.add('fa-circle-pause');

})


document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0)
        {
          songIndex=0;      
        }
        else{
                songIndex-=1;    
        }
if(songIndex==0)
{
        audioElement.src="songs/music.mp3";
        masterSong.innerText=songs[songIndex].songName;
}
else if(songIndex==1)
{
        audioElement.src="songs/BackToDecember.mp3" ;
        masterSong.innerText=songs[songIndex].songName;   
}
else if(songIndex==2)
{
        audioElement.src="songs/Fearless.mp3"  ; 
        masterSong.innerText=songs[songIndex].songName; 
}
else if(songIndex==3)
{
        audioElement.src="songs/YouBelongWithMe.mp3" ; 
        masterSong.innerText=songs[songIndex].songName;  
}
else{
        audioElement.src="songs/ShakeItOff.mp3";     
        masterSong.innerText=songs[songIndex].songName;
}
//masterSong.innerText=songs[songIndex].songName;
audioElement.currentTime = 0;

audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');   
 masterPlay.classList.add('fa-circle-pause');

})