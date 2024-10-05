let listItems = document.getElementsByTagName("LI");
for (let i = 0; i < listItems.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listItems[i].appendChild(span);
}


let close = document.getElementsByClassName("close");

for(let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let item = this.parentElement;
        item.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
},false);


const btn = document.getElementById("btn");
btn.addEventListener('click', function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  if(inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = '';

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for(let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let item = this.parentElement;
        item.style.display = "none";
    }
}
});


