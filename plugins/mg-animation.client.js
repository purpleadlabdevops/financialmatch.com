export default ({ app }, inject) => {
  inject('mgAnimation', () => {
    setTimeout(()=>{
      const offset = window.scrollY + window.innerHeight * .60
      const animBlocks = document.querySelectorAll('[data-anim]');
      if(animBlocks.length > 0){
        animBlocks.forEach(item => {
          if(item.dataset.parent === "1"){
            if(offset > item.parentNode.offsetTop + item.offsetTop){
              item.classList.add(`animate__${item.dataset.anim}`)
              if(item.dataset.delay) item.style.animationDelay = `${item.dataset.delay}ms`
              if(item.dataset.duration) item.style.animationDuration = `${item.dataset.duration}ms`
            }
          } else if(item.dataset.parent === "3"){
            if(offset > item.parentNode.parentNode.parentNode.offsetTop + item.offsetTop){
              item.classList.add(`animate__${item.dataset.anim}`)
              if(item.dataset.delay) item.style.animationDelay = `${item.dataset.delay}ms`
              if(item.dataset.duration) item.style.animationDuration = `${item.dataset.duration}ms`
            }
          } else {
            if(offset > item.offsetTop){
              item.classList.add(`animate__${item.dataset.anim}`)
              if(item.dataset.delay) item.style.animationDelay = `${item.dataset.delay}ms`
              if(item.dataset.duration) item.style.animationDuration = `${item.dataset.duration}ms`
            } else if(item.nodeName === "rect" && offset > item.parentNode.parentNode.offsetTop){
              item.classList.add(`animate__${item.dataset.anim}`)
              if(item.dataset.delay) item.style.animationDelay = `${item.dataset.delay}ms`
              if(item.dataset.duration) item.style.animationDuration = `${item.dataset.duration}ms`
            }
          }
        })
      }
    }, 50);
  })
}