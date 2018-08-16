const box = document.querySelector("div.switchBox")

box.addEventListener('click', function(event){
  const hasMoved = box.classList.contains("on");
  if(hasMoved){
    box.classList.remove("on");
    box.classList.add("off");
    applyTheme(false);
  } else{
    box.classList.remove("off");
    box.classList.add("on");
    applyTheme(true);
  }
});

function applyTheme(isFirstTheme){
  if(isFirstTheme){
    document.documentElement.style.setProperty('---primary-color', '#0097a7');
    document.documentElement.style.setProperty('---secondary-color', '#757575');
    document.documentElement.style.setProperty('---bg-color', '#222'); // originally Black
    document.documentElement.style.setProperty('---font-color', '#222');
    document.documentElement.style.setProperty('---second-font-color', '#bbb');
    document.documentElement.style.setProperty('---hover-color', '#eee');
    document.documentElement.style.setProperty('---bg-hover-color', 'rgba(0,0,0,0.3)');
  }
  else{
    document.documentElement.style.setProperty('---primary-color', '#bbb');
    document.documentElement.style.setProperty('---secondary-color', '#757575');
    document.documentElement.style.setProperty('---bg-color', '#444'); // originally Black
    document.documentElement.style.setProperty('---font-color', 'black');
    document.documentElement.style.setProperty('---second-font-color', '#bbb');
    document.documentElement.style.setProperty('---hover-color', '#fff');
    document.documentElement.style.setProperty('---bg-hover-color', 'rgba(90,90,90,1)');
  }
}
