const nav = document.querySelector('.navbar');
const navContainer = document.querySelector('#nav-container');

let locatMain = window.pageYOffset;

window.addEventListener('scroll', () => {
    let locatCurrent = window.pageYOffset;

    console.log(locatCurrent)

    if(locatMain >= locatCurrent)
    {
        nav.style.top = '0px';
        nav.style.backgroundColor = '#140e37';
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.border = 'solid 1px rgba(255, 255, 255, 01)';
        nav.style.position ='fixed';
        nav.style.width = '100%';
        navContainer.style.marginTop = '-18px';

        if(locatCurrent < 1)
        {
            nav.style.backgroundColor = '#0e0a27';
            nav.style.backdropFilter = 'none';
            nav.style.border = 'none'
            navContainer.style.marginTop = 'none';
        }

    }else{
        nav.style.top = '-100px';
    }

    locatMain = locatCurrent;
})


 

