async function getCocktailCards() {
    const response = await fetch('drink.json');
    const content = await response.json();

    showCocktailCards(content, 6);
    
 }
 getCocktailCards()

 
 async function showCocktailCards(content, repetitions) {

   const drinkList = document.querySelector('.drink-list');
   for (let i = 0; i < repetitions; i++) {
   let cards = content;
   cards.forEach(element => {
       
       const item = document.createElement('div');
       item.classList.add('drink-card');
       
       item.innerHTML = 
                          `
                        <div class="img">
                            <img src="${element.img}" alt="cocktail">
                        </div>
                        <div class="content">
                            <div class="title">${element.name}</div>
                            <div class="description">${element.description}</div>
                            <div class="price">${element.price}</div>
                            <button class="add">Add to cart</button>
                        </div>
                        
                      `
                      drinkList.appendChild(item);
                    
                      
                      
   })                     
}};

let thisPage = 1;
let limit = 6;

async function loadItem () {
    const response = await fetch('drink.json');
    const content = await response.json();
    let list = document.querySelectorAll('.drink-list .drink-card');
     let beginGet = limit * (thisPage - 1);
     let endGet = limit * thisPage - 1;
     list.forEach((item, key) => {
         if(key >= beginGet && key <= endGet) {
             item.style.display = 'block';
         } else {
             item.style.display = 'none';
         }
     })
     listPage();
 }

 loadItem();


 function listPage(){
    let list = document.querySelectorAll('.drink-list .drink-card');
     let count = Math.ceil(list.length / limit);
     document.querySelector('.list-pages').innerHTML = '';

     if(thisPage != 1) {
         let prev = document.createElement('li');
         prev.innerText = "PREV";
         prev.setAttribute('onclick', "changePage (" + (thisPage - 1) + ")");
         document.querySelector('.list-pages').appendChild(prev);
     }
     for (i = 1; i <= count; i++) {
         let newPage = document.createElement('li');
         newPage.innerText = i;
         if(i == thisPage) {
             newPage.classList.add('active');
         }
         newPage.setAttribute('onclick', "changePage (" + i + ")");
         document.querySelector('.list-pages').appendChild(newPage);
     }

     if(thisPage != count) {
         let next = document.createElement('li');
         next.innerText = "NEXT";
         next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
         document.querySelector('.list-pages').appendChild(next);
     }
 }

 function changePage(i) {
     thisPage = i;
     loadItem();
 }
