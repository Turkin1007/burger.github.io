let lines = document.querySelectorAll(".menu-acco__item");
  
  for (let i = 0; i < lines.length; i++) {

    let element = lines[i];

    element.addEventListener('click', function(e) {
      e.preventDefault();

      for (let item = 0; item < lines.length; item++) {
        if (lines[item] !== element) {
          lines[item].classList.remove('menu-acco__item-active');
        }
      }

      if (element.classList.contains('menu-acco__item-active')) {
        element.classList.remove('menu-acco__item-active');
      } 
      else {
        element.classList.add('menu-acco__item-active');
      }

    })

  }