// var now=moment();
// console.log(now.format('h:mm:ss'));
const plus =document.getElementById('plus');
const header=document.querySelector('header');
const colonnes=document.querySelector('.colonnes');
const btncolone=document.getElementById('colonnebtn');
// console.log(btncolone)
const btnnote=document.getElementById('colonnenote');
const menucols=document.querySelector('.menucols')
const container=document.querySelector('.container');
const btnx=document.getElementById('btnX');


const btnleft=document.getElementById('btnleft');
const btnright=document.getElementById('btnright');
const divarea=document.getElementById('area');
const popuptache=document.querySelector('.popuptache');



// ***********recuperation boutons popup confirmer et corbeille**********
const corbeille=document.querySelector('#corbeillebtn');
const corbeilles=document.querySelector('.corbeilles');


const confirmer=document.getElementById('c');
const annuler=document.getElementById('A');










const modal_container=document.querySelector('.modal_container');

    // constante du formulaires
const forms=document.querySelector('#form');
const submitbtn=document.querySelector('#envoyer');
const texteareas=document.querySelector('#textarea'); 
//console.log(textearea);  
const dates=document.querySelector('.dates');    
const timedebut=document.querySelector('.tdebut');    
const timefin=document.querySelector('.tfin');   
const erreur=document.getElementById('erreur') 



// ********validation formulaire************************

texteareas.addEventListener('input',()=>
{
    if(texteareas.value==''|| texteareas.value==null)
    {
     
        texteareas.style.border='solid 2px red';
       erreur.innerHTML="champ obligatoire"
       erreur.style.visibility="visible"
    
    }else{
        texteareas.style.border='solid 2px green';
    }
})
  dates.addEventListener('input',()=>{
      if(dates.value==null || dates.value=='')
         {
            dates.style.border='solid 2px red';
         }
         else if(!dates.value.match==(/^[0-3]?[0-9]\/[01]?[0-9]\/[12][90][0-9][0-9]$/))
         {
            dates.style.border='solid 2px red';

         }
         else{
            dates.style.border='solid 2px green';

         }
    

            
  })  
  timedebut.addEventListener('input',()=>{
      if(timedebut.value==null|| timedebut.value=='')
      {
            timedebut.style.border='solid red 2px';
      }else{
        timedebut.style.border='solid green 2px';

      }
  })

  timefin.addEventListener('input',()=>
  {
        if(timefin.value==null || timefin.value=='')
        {
            timefin.style.border='solid red 2px';
        }else if(timefin.value<timedebut.value)
        {
            timefin.style.border='solid red 2px'
        }else
        {
            timefin.style.border='solid green 2px';
        }
  })




        plus.addEventListener('click',()=>header.classList.toggle('active'));

        var nbr=0;
        var couleur_entete=['#33E9FF','#FFB533','#33A8FF','#BE33FF','#FF33B8'];
        var couleur_corps=['#33FCFF','#FFDD33','#33D1FF','#DD33FF','#FF33E9'];

        btncolone.addEventListener('click',()=>{ajoutcolone();})

    i=0;
    function ajoutcolone(){
     if(nbr<5)
     {
        
        let div=document.createElement('div');//Grand DIV
        div.setAttribute('id',nbr+1)
        div.classList.add('colonnes');
        div.style.backgroundColor=couleur_corps[i];
    
        
        let div1=document.createElement('div');
        div1.setAttribute('id','colonne1');
        div1.style.backgroundColor=couleur_entete[i];
        
        let buttonsupcol=document.createElement('button')
        buttonsupcol.setAttribute('id','btnsuppcol')
        div.appendChild(buttonsupcol);

        const LesColonnes=document.querySelectorAll('.colonnes');
        console.log(LesColonnes)

        buttonsupcol.textContent="supprimer colonne" +(nbr+1);


        // **************supprimer colonnes***********
        
         buttonsupcol.addEventListener('click',()=>
        {
           var tap=buttonsupcol.parentNode;
           
            menucols.removeChild(tap)
            nbr--;
            i--;
            btncolone.disabled=false;

           
        //  console.log(tap); 

           
        })
     

        let p=document.createElement('p');
        p.textContent=" Colonne "+(nbr+1);
       
        
        div1.appendChild(p);
        div.appendChild(div1);
        // let colonnes=document.querySelector('.colonne')
    


        menucols.appendChild(div);

        nbr++;
        i++;
        btnnote.disabled=false
         
        

     }else  
             {
             btncolone.disabled=true;
             
            }

    };

    // ************modalll******************************************************
    btnnote.disabled=true

    btnnote.addEventListener('click',()=>{
    
        modal_container.classList.add('active');
    })


    btnx.addEventListener('click',()=>{
        modal_container.classList.remove('active');
    })


        // *******recuperation donnes formulaires****************

       

        

   forms.addEventListener('submit',(e)=>

            {  
                let texte = texteareas.value;
                let date=dates.value;
                let timecommence=timedebut.value;
                let timefini=timefin.value;
                if(texte==''||date==''||timecommence==''||timefini=='')

                {
                    e.preventDefault();
                }


   ajouttaches(texte,date,timecommence,timefini);  


    
//    console.log(date,texte,timecommence,timefin);

    
   });

   

//    **********ajouter taches***********

   function ajouttaches(texte)
    
   
        {
                let divtaches=document.createElement('div');
                divtaches.setAttribute('id','divarea');
                let divarea=document.createElement('div')
                divarea.setAttribute('id','area');
                let buttonsuptache=document.createElement('button')
                buttonsuptache.setAttribute('id','suptache')
                buttonsuptache.innerHTML='X'

       
      // ******* confirmer pop up tache********************************


                     buttonsuptache.addEventListener('click',()=>{

                    popuptache.classList.add('active');

                    });
// ******************corbeille****************


       corbeille.addEventListener('click',()=>
             {
                 
                corbeilles.classList.toggle('active')
            })
        
            
        confirmer.addEventListener('click',()=>
            {
                corbeilles.appendChild(divtaches);
                popuptache.classList.remove('active')
                buttonsuptache.classList.add('none')
                btnleft.classList.add('none')
                btnright.classList.add('none')

                
            })
         
        annuler.addEventListener('click',()=>
        {
            popuptache.classList.remove('active')
        })    

  

//    ************deplacement taches supp taches modif taches**********************
    


       let btnleft=document.createElement('button');
       btnleft.setAttribute('id','btnleft')
       btnleft.innerHTML='<<'

       
      
       btnleft.addEventListener('click',()=>

       {  
               let Left =btnleft.parentNode;

                let left= btnleft.parentElement.parentElement;

                left.previousElementSibling.appendChild(Left);
       });

                let i=document.createElement('img')
                i.setAttribute('id',i)
                let textarea=document.createElement('textarea');
                textarea.value=texte
                textarea.appendChild(i)
                
                divarea.appendChild(textarea)

    
     

     

                let btnright=document.createElement('button');
                btnright.setAttribute('id','btnright');
                btnright.innerHTML='>>'


        
       
       
                 btnleft.style.visibility='hidden'

       
                 btnright.addEventListener('click',()=>
                
                        {

                                    let right=btnright.parentNode;
                                    let RightB=btnright.parentElement.parentElement
                                    RightB.nextElementSibling.appendChild(right);
                                    btnleft.style.visibility='visible'
                    
                        }) ;
                            
       


                divtaches.appendChild(btnleft)

                divtaches.appendChild(divarea);
                divtaches.appendChild(btnright)
                divtaches.appendChild(buttonsuptache)

                

                 document.querySelector(".colonnes").appendChild(divtaches);

                modal_container.classList.remove('active');
                
            }

   


  