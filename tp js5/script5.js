const apiurl="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgpath="https://image.tmdb.org/t/p/w1280";
const searchapi="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const menu=document.querySelector('.menu');

const form=document.querySelector('.form')
const search=document.getElementById('search')
var i=1;
function getmovie(url)
{
    fetch(url).then(res =>res.json()).then(data => {

        showmovie(data.results);
    })
}
getmovie("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+i);



function showmovie(data)
{
    data.forEach(movie => {
        const{title,overview,poster_path,vote_average}=movie;
        const movieEl=document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`
        
        <div id="imagefilm1"><img src="${imgpath+poster_path}" alt="${title}"></div>
        <div id="infofilm1">
           <h4 class="titrefilm">${title}</h4>
           <span class="${color(vote_average)}">${vote_average}</span>
       </div>
       <div id="texte">
           <h4>overview:</h4>
           ${overview}

       </div>

        
        `
        menu.appendChild(movieEl)
    });

}
function color(vote)
{
    if(vote >=8)
    {
        return 'green'
      }
    else if(vote >=5 )
    {
        return 'orange'
    }else
    
        return 'red'
        
};
form.addEventListener('submit', (e)=>
{
    e.preventDefault();
    const searchterm=search.value;

    if(searchterm)
    {
    menu.innerHTML='';

        getmovie(searchapi+'/'+searchterm);
    }

})
window.addEventListener('scroll',()=>{

    if(window.innerHeight+window.scrollY>=document.body.offsetHeight)
        
    {
        i++;
        getmovie("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+i);

    }
})


