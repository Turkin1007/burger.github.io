let team = document.querySelectorAll(".team-acco__item");
  
  for (let i = 0; i < team.length; i++) {

    let element = team[i];

    element.addEventListener('click', function(e) {
      e.preventDefault();

      for (let item = 0; item < team.length; item++) {
        if (team[item] !== element) {
          team[item].classList.remove('team-acco__item-active');
        }
      }

      if (element.classList.contains('team-acco__item-active')) {
        element.classList.remove('team-acco__item-active');
      } 
      else {
        element.classList.add('team-acco__item-active');
      }

    })

  }