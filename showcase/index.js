const body = document.querySelector('body')
  const text = document.querySelector('.body-text')
  const para = document.querySelector('p')
  const btnToggleLight = document.querySelector('.light-theme')
  const btnToggleDark = document.querySelector('.dark-theme')
  const nav = document.querySelector('nav')
  const icon = document.querySelector('.icons')
  icon.style.backgroundColor = 'white';
  icon.style.padding = '5px';
  
function darkTheme (){
  
  nav.style.backgroundColor = 'black';
  body.style.backgroundColor = 'black';
  text.style.color = 'white';
  para.style.color = 'white';
  btnToggleDark.style.display ='none'
  btnToggleLight.style.display ='block'
  
}

function lightTheme(){
  body.style.backgroundColor = 'white';
  text.style.color = 'black';
  para.style.color = 'black';
  btnToggleLight.style.display ='none'
  nav.style.backgroundColor = 'white';
  btnToggleDark.style.display ='block'
}