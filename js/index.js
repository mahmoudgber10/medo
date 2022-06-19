var about = document.querySelector('.about');
var section = document.querySelector('.section');
var section2 = document.querySelector('.section2');
var services = document.querySelector('.services');
var call = document.querySelector('.call .container');

window.onscroll = function()
{
    if(document.body.scrollTop > 120)
    {
        about.classList.add ('animate__fadeInUp')
    }
    if(document.body.scrollTop > 480)
    {
        section.classList.add ('animate__fadeInUp')
    }
    if(document.body.scrollTop > 1000)
    {
        section2.classList.add ('animate__fadeInUp')
    }
    if(document.body.scrollTop > 1500)
    {
        services.classList.add ('animate__fadeInUp')
    }
    if(document.body.scrollTop > 2000)
    {
        call.classList.add ('animate__fadeInUp')
    }
    
}