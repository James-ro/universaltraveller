

/*--------------------------parallax effect--------------------------*/
window.addEventListener('scroll', () => {
    let parent =  document.getElementById('parallaxcontainer');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
  }, false)
  
  

  window.addEventListener("load", function()
{
   window.addEventListener("scroll", function() {
      var img = document.querySelector("header");
	  img.style.opacity = 1-(4/(window.innerHeight/window.scrollY)); 
   });
});
  

  
