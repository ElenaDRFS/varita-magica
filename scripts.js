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
