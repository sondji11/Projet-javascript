const togle=document.getElementById('togle');
const nav=document.querySelector('.nav');
const ul=document.querySelector('.ul');


togle.addEventListener('click', ()=>document.body.classList.toggle('show_nav'));



// dashboard
function dashboard(){
    var uldash=document.createElement('ul');
    var lidash=document.createElement('li');
    lidash.className='lidash';
    uldash.appendChild(lidash);
    var imgdash=document.createElement('img');
    imgdash.src="dash.png"
    var spandash=document.createElement('span');
    spandash.className='dashbord';
    spandash.innerHTML='Dashboard'
    lidash.appendChild(imgdash);
    lidash.appendChild(spandash);
    ul.appendChild(uldash);
    nav.appendChild(ul);
    

    console.log("ok");


}
dashboard();