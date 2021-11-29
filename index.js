// Your code here
const dodger = document.getElementById("dodger"); 

dodger.style.backgroundColor = "#FF69B4"; 


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
}); 

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 10}px`;
    }
}


  document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });
  
  function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 10}px`;
    }
}


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
}); 

// function moveDodgerUp(){
//     const upNumbers = dodger.style.up.replace("px","");
//     const up = parseInt(upNumbers, 10);

//     if (up > 0){
//         dodger.style.up = `${up - 10}px`;
//     }
// }