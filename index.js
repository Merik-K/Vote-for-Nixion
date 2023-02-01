let Nixon = document.getElementById('Nixonbtn');
let McGovern = document.getElementById('McGovernbtn');
var count = 0;
let win = document.getElementById('winner');
let lose = document.getElementById('loser');

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
  }
}
