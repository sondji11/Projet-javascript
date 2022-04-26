
// console.log(now,countdown);
const text=document.querySelector('h2')

function rebourd()
{
    const now=new Date().getTime();
    const countdowndate=new Date('december 31,2022').getTime();

    const distancebase=countdowndate-now;
    const days=Math.floor(distancebase/(1000*60*60*24));
    const heure=Math.floor((distancebase %(1000*60*60*24)) / (1000*60*60));
    const minutes=Math.floor((distancebase %(1000*60*60))/(1000*60));
    const seconde=Math.floor((distancebase%(1000*60))/(1000));

// console.log(days,heure,minutes,seconde);
    text.innerText=`${days}jours ${heure}Heure ${minutes}minutes ${seconde}seconde`


}
rebourd();

const countdowninterval=setInterval(rebourd, 1000);