const d = new Date();
console.log(d.getSeconds());

const min = document.querySelector('.second')
rotationAng = 0
setInterval(()=>{
    rotationAng += 6;
  min.style.transform = `rotate(${rotationAng}deg)`;
//   console.log("Hello");
},1000)