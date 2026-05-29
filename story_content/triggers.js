function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Ypux8DhigK":
        Script1();
        break;
      case "5W0qLgDYJ1h":
        Script2();
        break;
      case "6kqwJnSjE9a":
        Script3();
        break;
      case "6rMq6NU3Io4":
        Script4();
        break;
      case "6mmYd8a1T1T":
        Script5();
        break;
      case "60lZVgGkbdK":
        Script6();
        break;
      case "6loD9JoYpCo":
        Script7();
        break;
      case "5phu008i8Wm":
        Script8();
        break;
      case "6GNvwCKOuHY":
        Script9();
        break;
      case "5klhjGRoUc4":
        Script10();
        break;
      case "5qHsfb1ycY0":
        Script11();
        break;
      case "66S7oFwjOXr":
        Script12();
        break;
      case "6iDWStX23eL":
        Script13();
        break;
      case "5uol5XT4qBa":
        Script14();
        break;
      case "6TLWh4TXDAI":
        Script15();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('5dMATZWCCTS');
const duration = 750;
const easing = 'ease-out';
const id = '5YC9brv95of';
const pulseAmount = 0.07;
const delay = 4500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5dMATZWCCTS');
const duration = 750;
const easing = 'ease-out';
const id = '5YC9brv95of';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
