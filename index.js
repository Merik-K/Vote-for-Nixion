let Nixon = document.getElementById('Nixonbtn');
let McGovern = document.getElementById('McGovernbtn');
var count = 0;
let win = document.getElementById('winner');
let lose = document.getElementById('loser');
let yes = document.getElementById('si');
let no = document.getElementById('no');
let yess = 0;
let noo = 0;
let Nixonbtn2 = document.getElementById('Nixonbtn2');
let eagle = document.getElementById('eagle');

function doThis() {
  alert('Please choose wisely on who to vote for!');
}

Nixon.addEventListener('click', NixonX);
function NixonX() {
  if (count == 0) {
    win.style.display = 'initial';
    McGovern.removeEventListener('click', McGovernM);
  }
}

McGovern.addEventListener('click', McGovernM);
function McGovernM() {
  if (count == 0) {
    lose.style.display = 'initial';
    yes.addEventListener('click', YesS);
    no.addEventListener('click', NoO);
  }
}
yes.addEventListener('contextmenu', (a) => {
  a.preventDefault();
});
function YesS() {
  if (yess == 0) {
    lose.style.display = 'none';
  }
  console.log('hello');
  Nixonbtn2.style.display = 'initial';
  document.removeEventListener('no');
}

no.addEventListener('contextmenu', (a) => {
  a.preventDefault();
});
function NoO() {
  if (yess == 0) {
    lose.style.display = 'none';
  }
  alert('Good Choice!');
  console.log('hello');
  document.removeEventListener('yes');
}

function Red(x) {
  no.style.background = 'red';
}

function Blue(x) {
  yes.style.background = 'blue';
}

function normal(x) {
  yes.style.background = 'none';
  no.style.background = 'none';
}
