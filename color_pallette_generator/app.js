const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
let containers = document.querySelectorAll(".container");
    

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        containers.forEach(container => {            
            let hexColor = '#';
            for(let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];             
            };    
            container.textContent = "hex: " + hexColor;                         
            container.style.backgroundColor = hexColor; 
            container.style.border = 'none';            
        });         
    };
  });

  function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}
