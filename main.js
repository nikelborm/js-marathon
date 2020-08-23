const $kickBtn = document.getElementById( "btn-kick" );
const $attackBtn = document.getElementById( "btn-attack" );

const character = {
  name: "Pikachu",
  maxHP: 100,
  realHP: 100,
  elHPText: document.getElementById( "health-character" ),
  elHPProgressbar: document.getElementById( "progressbar-character" ),
};
const enemy = {
  name: "Charmande",
  maxHP: 100,
  realHP: 100,
  elHPText: document.getElementById( "health-enemy" ),
  elHPProgressbar: document.getElementById( "progressbar-enemy" ),
};

function endFightIf0HP() {
  if ( enemy.realHP && character.realHP ) return;

  $kickBtn.disabled = true;
  $attackBtn.disabled = true;
  if ( !enemy.realHP && !character.realHP ) {
    alert( "В этой битве нет прогиравших. Только трупы." );
  } else if ( !enemy.realHP ) {
    alert( "Бедный " + enemy.name + " прогирал" );
  } else if ( !character.realHP ) {
    alert( "Бедный " + character.name + " прогирал" );
  }
}
function renderHP( person ) {
  // render HP Text
  person.elHPText.innerText = person.realHP + " / " + person.maxHP;
  // render HP Progressbar
  person.elHPProgressbar.style.width = person.realHP + "%";
}
function getRandomNum( max ) {
  return Math.ceil( Math.random() * max );
}
function subtractHP( person, count ) {
  if ( person.realHP > count ) {
    person.realHP -= count;
  } else {
    person.realHP = 0;
  }
  renderHP( person );
}
function init() {
  console.log( "Start Game!" );
  $attackBtn.addEventListener( "click", function() {
    subtractHP( enemy, getRandomNum( 20 ) );
    endFightIf0HP();
  } );
  $kickBtn.addEventListener( "click", function() {
    subtractHP( enemy, getRandomNum( 20 ) );
    subtractHP( character, getRandomNum( 20 ) );
    endFightIf0HP();
  } );
  renderHP( character );
  renderHP( enemy );
}
init();
