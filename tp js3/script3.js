const items=document.querySelectorAll('img');
const nbslide=items.length
const suivant=document.querySelector('.suivant')
const precedent=document.querySelector('.precedent')
const slider=document.querySelector('.slider')

let count=0


function slidesuivant(){
    items[count].classList.remove('active')
    if(count<nbslide-1){
        count++;
    }else{
        count=0
    }
    items[count].classList.add('active')

}
suivant.addEventListener('click',slidesuivant);

function slideprecedent(){
    items[count].classList.remove('active')
    if(count>0)
    {
        count--;
    }else{
        count=nbslide-1;
    }
    items[count].classList.add('active')

}
precedent.addEventListener('click',slideprecedent);

setInterval(() => {

    items[count].classList.remove('active')
    if(count<nbslide-1){
        count++;
    }else{
        count=0
    }
    items[count].classList.add('active')
    
}, 6000);