
const mainSection = document.querySelector('.main-section')
const hamburgerBtnMenu = document.querySelector('.btn-open-navigation ')
const closeBtn = document.querySelector('.btn-close-navigation')

const slideNavWrapper = document.querySelector('.sidenav-content-wrapper')


function openNav(e){

    this.classList.add('btn-open-navigation--active')

    this.addEventListener('animationend',()=>{
 
        slideNavWrapper.classList.add("visible","active")
    })
    mainSection.setAttribute("aria-hidden","true")
    this.setAttribute("aria-hidden","true")
}



function closeNav(e){

    if(e.type === 'keyup' && e.key !== 'Escape'){
        return;
    } 
    
    slideNavWrapper.classList.remove("active")
    mainSection.removeAttribute("aria-hidden")
    hamburgerBtnMenu.removeAttribute("aria-hidden")
    setTimeout(() => {
        closeBtn.focus
       
    }, 1);
    setTimeout(() => {
        slideNavWrapper.classList.remove("visible")
        hamburgerBtnMenu.classList.remove('btn-open-navigation--active')   
        
    }, 501);
    
}

export const initAccesibility =  function(){
    hamburgerBtnMenu.addEventListener('click',openNav)
    closeBtn.addEventListener('click',closeNav)
    slideNavWrapper.addEventListener('keyup',closeNav)
}
    
  

