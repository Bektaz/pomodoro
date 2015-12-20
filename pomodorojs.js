//this function for sec counting
var myVar = setInterval(myTimer ,1000);
//this function for arc creating
var variable = setInterval(create, 125);
//this variable is flag for pause and play
var isPaused = false;
var wsec = 0, wmin = 25, bsec = 0, bmin = 5;
//these 2 vars i created to manipulate with them in up down and reset functions and assign them to wmin and bmin
var mfr = wmin;
var mfrb = bmin;

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
//here 270 is degree which starts arc from the top of circle
var startAngle = 270 * Math.PI/180;
var i = 270;
showzerowl();
showzerobl();
function myTimer() {
  worktime();
  document.getElementById("idforgifs").className = "geardiv";
  if(wmin<0){ 
    document.getElementById("idforgifs").className = "coffeediv";
    breaktime();
    if(bmin<0){
      reset();
    }
  }  
}
//pause, play
function toggle(){
  if(isPaused){
    isPaused = false;
  }else if(!isPaused){
    isPaused = true;
  }
}

function up(){  
  resetarc();
  isPaused = true;
  if(isPaused){
    if(mfr>89){
      mfr=89;
    }
  mfr++;
  showzerowl();
  wmin = mfr;
  wsec = 0;
  }
}
function down(){  
  resetarc();
  isPaused = true;
  if(isPaused){
    if(mfr<2){
      mfr=2;
    }
  mfr--;
  showzerowl();
  wmin = mfr;
  wsec = 0;
  }
}
function bup(){
  isPaused = true;
  if(isPaused){
    if(mfrb>59){
      mfrb=59;
    }
  mfrb++;
  showzerobl();
  bmin = mfrb;
  bsec = 0;
  }
}
function bdown(){
  isPaused = true;
  if(isPaused){
    if(mfrb<2){
      mfrb=2;
    }
  mfrb--;
  showzerobl();
  bmin = mfrb;
  bsec = 0;
  }
}

function reset(){if(!isPaused){wmin = mfr;wsec = 0;bmin = mfrb;bsec = 0;}}
//function for sec counting of work time
function worktime(){
  if(!isPaused){
    if(wmin<10){
        if(wsec<10){
        document.getElementById("demo").innerHTML = '0'+wmin+':'+'0'+wsec;
        }else{
        document.getElementById("demo").innerHTML = '0'+wmin+':'+wsec; 
        }
    }else{
      if(wsec<10){
        document.getElementById("demo").innerHTML = wmin+':'+'0'+wsec;
        }else{
        document.getElementById("demo").innerHTML = wmin+':'+wsec; 
      }
    } 
    if(wsec===0){
    wsec=60;
    wmin--;
    resetarc();
    }
    wsec--;
    if(wmin===0 && wsec===0){
        document.getElementById("audbreak").play();    
    }  
  }
}
//function for sec counting of break time
function breaktime(){  
  if(!isPaused){
    if(bmin<10){
        if(bsec<10){
        document.getElementById("demo").innerHTML = '0'+bmin+':'+'0'+bsec;
        }else{
        document.getElementById("demo").innerHTML = '0'+bmin+':'+bsec; 
        }
    }else{
      if(bsec<10){
        document.getElementById("demo").innerHTML = bmin+':'+'0'+bsec;
        }else{
        document.getElementById("demo").innerHTML = bmin+':'+bsec; 
      }
    }
    if(bsec===0){
      bsec=60;
      bmin--;
      resetarc();      
    }
    bsec--;
    if(bmin===0 && bsec===0){
        document.getElementById("audwork").play();    
    } 
  }
}
//show zero next to minute of work time
function showzerowl(){
  if(mfr<=9){
    document.getElementById("wl").innerHTML = '0'+mfr;
  }else{
    document.getElementById("wl").innerHTML = mfr;
  }
}
//show zero next to minute of break time
function showzerobl(){
  if(mfrb<=9){
    document.getElementById("bl").innerHTML = '0'+mfrb;
  }else{
    document.getElementById("bl").innerHTML = mfrb;
  }  
}
//creating arc with canvas
function create(){
  if(!isPaused){
    i+=0.75;
    context.beginPath();
    context.arc(canvas.width/2,canvas.height/2, 172.5, startAngle, i * Math.PI/180);
    context.lineWidth = 5;
    context.strokeStyle = '#02ADFC';
    context.stroke();
  }  
}
function resetarc(){
  i=270;
  context.clearRect(0, 0, canvas.width, canvas.height);
  k=0;
}
