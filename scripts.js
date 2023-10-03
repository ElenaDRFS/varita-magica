console.log('hola');

// evitar click

const enlaces = document.querySelectorAll('a');

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click', function(event){
        event.preventDefault();


}); 
}

// cambiar imágenes por gif
 /*
const photos = document.querySelectorAll('img');

for(let i = 0; i < photos.length; i++){
    photos[i].setAttribute('src', '../assets/magic-2.gif');


}

*/

// cambiar párrafos

const parrafo = document.getElementsByTagName('p');

for(i = 0; i < parrafo.length; i++){
    parrafo[i].style.backgroundColor = 'pink';
    parrafo[i].style.color = 'green';
    
}

// cambiar section o article

const varios = document.getElementsByTagName('section', 'article');

for(i = 0; i < varios.length; i++){
    varios[i].style.backgroundColor = 'grey';
    
    
}

// cursor por encima imágenes (con el toggle seguro vuelve al original. consultar en clase)

const magia = document.querySelectorAll('img');

for(let i = 0; i < magia.length; i++){
    magia[i].addEventListener('mouseover', function(){
            magia[i].src = "../assets/abracadabra.gif";

    })
}

for(let i = 0; i < magia.length; i++){
    magia[i].addEventListener('mouseout', function(){
            magia[i].src = '../assets/magic-2.gif' ;

    })
}

// cursor por encima cambia parrafos 

const text = document.getElementsByTagName('p');
for(let i = 0; i < text.length; i++){
    text[i].addEventListener('mouseover', function(){
        text[i].style.backgroundColor = 'black';
        text[i].style.color = 'white';

    })
}

for(let i = 0; i < text.length; i++){
    text[i].addEventListener('mouseout', function(){
        text[i].style.backgroundColor = 'white';
        text[i].style.color = 'black';

    })
}


// cursor por encima cambia section y article
const others = document.getElementsByTagName('section', 'article');
for(let i = 0; i < others.length; i++){
    others[i].addEventListener('mouseover', function(){
        others[i].style.backgroundColor = 'beige';
         
    })
}

for(let i = 0; i < text.length; i++){
    others[i].addEventListener('mouseout', function(){
        others[i].style.backgroundColor = 'white';
        

    })
}

// función colores random

const colors = ['red', 'blue', 'green']

const getRandom = array => {
    for(i = 0; i <  array.length; i++)       
    return colors[i];
}

console.log(colors);
