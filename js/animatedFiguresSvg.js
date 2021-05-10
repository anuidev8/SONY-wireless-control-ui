const figuresSvg = document.querySelectorAll('[data-name="fg"]')

export  const animatedFigures = function(e){
    //page x retorna la cordenada relativa al documento de acuerdo al evento
    for(let i = 0;i < figuresSvg.length;i++){
   let x = e.pageX,
        y = e.pageY;

        figuresSvg[i].style.transform =`translate(${(x - 100)}px,${(y  - 100)}px) rotate(15deg) `;
        figuresSvg[i].style.transitionDelay = `.00${i}s`
    }
       
};  
