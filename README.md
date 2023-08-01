# cocktail-pagination

*This project I made to practice Java Script, pagination and JSON. The idea was to create a list with cocktails.*

![](https://img.shields.io/badge/-HTML-FB6D3A)
![](https://img.shields.io/badge/-CSS-FB6D3A)
![](https://img.shields.io/badge/-JavaScript-FB6D3A)
![](https://img.shields.io/badge/-JSON-FB6D3A)

![my-project-photo](/image-pagination.jpg)

## My code


     if(thisPage != 1) {
         let prev = document.createElement('li');
         prev.innerText = "PREV";
         prev.setAttribute('onclick', "changePage (" + (thisPage - 1) + ")");
         document.querySelector('.list-pages').appendChild(prev);
     }

     
