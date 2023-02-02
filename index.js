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

function doThis() {
  alert('Please choose wisely on who to vote for!');
}

Nixon.addEventListener('click', NixonX);
function NixonX() {
  if (count == 0) {
    win.style.display = 'initial';
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
function YesS() {
  if (yess == 0) {
    lose.style.display = 'none';
  }
  console.log('hello');
  Nixonbtn2.style.display = 'initial';
}

function NoO() {
  if (yess == 0) {
    lose.style.display = 'none';
  }
  alert('Good Choice!');
  console.log('hello');
}
