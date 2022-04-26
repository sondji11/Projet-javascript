const bouton=document.querySelectorAll('button');
const bdp=document.getElementById('bdp');
 for(let i=0;i<bouton.length;i++)
{
   bouton[i].addEventListener('click',function(e)
   {
        var rec=e.target.classList[0];
        generer(rec,e);
        
   }) 
  

};



function generer(rec,e){
    var div=document.createElement('div');
    div.className='bas';
    var p=document.createElement('p');
    p.innerHTML=e.target.value;
    div.appendChild(p);
    bdp.appendChild(div);
    div.classList=rec

    setTimeout(() => {
        bdp.removeChild(div)
    }, 3500);
};

