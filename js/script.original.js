var cardsArray = [{
    'name': 'shell',
    'img': 'img/01.jpg'
  }, {
    'name': 'star',
    'img': 'img/02.jpg'
  }, {
    'name': 'bobomb',
    'img': 'img/03.jpg'
  }, {
    'name': 'mario',
    'img': 'img/04.jpg'
  }, {
    'name': 'luigi',
    'img': 'img/05.jpg'
  }, {
    'name': 'peach',
    'img': 'img/06.jpg'
  }, {
    'name': '1up',
    'img': 'img/07.jpg'
  }, {
    'name': 'mushroom',
    'img': 'img/08.jpg'
  }, {
    'name': 'thwomp',
    'img': 'img/09.jpg'
  }, {
    'name': 'bulletbill',
    'img': 'img/10.jpg'
  }, {
    'name': 'coin',
    'img': 'img/11.jpg'
  }, {
    'name': 'goomba',
    'img': 'img/12.jpg'
  }];
  
  const gameGrid = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());
  
  let firstGuess = '';
  let secondGuess = '';
  let count = 0;
  let previousTarget = null;
  let delay = 1200;
  
  const game = document.getElementById('game');
  const grid = document.createElement('section');
  const facts = document.
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);
  
  gameGrid.forEach(item => {
    const { name, img } = item;
  
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;
  
    const front = document.createElement('div');
    front.classList.add('front');
  
    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${img})`;
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

  var startOver = document.getElementById('start-over');

  startOver.addEventListener('click', event => { location.reload(); });
  
  let endOfGame = 0;

  const match = () => {
    endOfGame ++;
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.add('matched');
    });
    if(endOfGame === 12) {
      alert('congrats');
    }
  };
  
  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
  };
  
  grid.addEventListener('click', event => {
  
    const clicked = event.target;
  
    if (
      clicked.nodeName === 'SECTION' ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains('selected') ||
      clicked.parentNode.classList.contains('match')
    ) {
      return;
    }
  
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
        }
        setTimeout(resetGuesses, delay);
      }
      previousTarget = clicked;
    }
  
  });


