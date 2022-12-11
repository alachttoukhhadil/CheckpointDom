// array of object
var articles = [
  {
    description: "Hoodie",
    prix: 120,
    couleur: "Noir",
    taille: "M",
    qunatité: 20,
    image: "hoodie.jpg",
  },
  {
    description: "Jogging",
    prix: 170,
    couleur: "Gris",
    taille: "L",
    qunatité: 5,
    image: "jogging.jpg",
  },
];
// when the user load the page diplay all products

// display of products
// loop products array
for (let article of articles) {
  console.log(article);
  // get the parent element to append new article
  let articlesContainer = document.querySelector(".articles-container");
  // create new article element
  let newarticle = document.createElement("div");
  newarticle.setAttribute("class", "card");
  // nabiw fel div bel les elements a afficher
  newarticle.innerHTML = `<img src="assets/${article.image}" alt="">
        <div class="card-body">
        <h5 class="card-title">${article.nom}</h5>
        <p class="card-text">${article.description}</p>
        <p class="price">${article.prix}DT</p>        
        <p class="card-text">${article.qunatité > 0 ? "En stock" : "Epuisé"}</p>
        <input type='button' value='+' class='incButton'>        
        <input type='button' value=1 class='inc'>
        <input type='button' value='-' class='decButton'>
        
    </div>
    
    <img src="./assets/heart-empty.png" width="32px" onclick="like(this)" alt="">
    <i onclick ="changeColor(this)" class='bx bx-heart-circle'></i>
    

  

          <button class="btn-primary">Delete</button>

    
        `;
  // append new article to articles container
  articlesContainer.append(newarticle);
}

let incButton = document.getElementsByClassName("incButton");
let decButton = document.getElementsByClassName("decButton");
let deleteBtn = document.getElementsByClassName("btn-primary");

for (let i = 0; i < incButton.length; i++) {
  incButton[i].addEventListener("click", function () {
    console.log(incButton[i]);
    incButton[i].nextElementSibling.value++;
    decButton[i].removeAttribute("disabled");
    document.getElementById("total").innerHTML = totalPrice(articles[i].prix);
  });
}

for (let i = 0; i < decButton.length; i++) {
  decButton[i].addEventListener("click", function () {
    if (decButton[i].previousElementSibling.value > 1) {
      decButton[i].previousElementSibling.value--;
      document.getElementById("total").innerHTML = totalPrice(
        -articles[i].prix
      );
    } else {
      decButton[i].setAttribute("disabled", "true");
    }
  });
}
var total = 290;

function totalPrice(price) {
  total = total + price;
  return total;
}

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function () {
    console.log(i);
    console.log(deleteBtn);
    console.log(deleteBtn[i]);
    console.log(i > deleteBtn.length - 1 ? i-- : i);
    deleteBtn[i > deleteBtn.length ? i-- : i].parentElement.remove();
    document.getElementById("total").innerHTML = totalPrice(-articles[i].prix);
  });
}

function like(elem) {
  if (elem.src == "http://127.0.0.1:5500/assets/heart-empty.png") {
    elem.src = "./assets/heart-filled.png";
  } else {
    elem.src = "./assets/heart-empty.png";
  }
}
function changeColor(elmnt) {
  if (elmnt.style.color == "" || elmnt.style.color == "black") {
    elmnt.style.color = "red";
  } else {
    elmnt.style.color = "black";
  }
}
