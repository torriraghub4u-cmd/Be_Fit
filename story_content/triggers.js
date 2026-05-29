function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pcM2tBzAwI":
        Script1();
        break;
      case "6YOXLSbZV0Q":
        Script2();
        break;
      case "6caIz14IN93":
        Script3();
        break;
      case "6WNP9RbQGFA":
        Script4();
        break;
      case "6Kycr30GWTO":
        Script5();
        break;
      case "5ZDduUHHxP1":
        Script6();
        break;
      case "5fwxVjF7ri2":
        Script7();
        break;
      case "6DuYiEV48hl":
        Script8();
        break;
      case "5dSS7ilcRUR":
        Script9();
        break;
      case "5dzbBLA9xpN":
        Script10();
        break;
      case "6SHYIzJZoWy":
        Script11();
        break;
      case "63bRdHg4KbV":
        Script12();
        break;
      case "6PzBSRc6MzK":
        Script13();
        break;
      case "5zuYZjzytq8":
        Script14();
        break;
      case "6jq9MkCXOnS":
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
