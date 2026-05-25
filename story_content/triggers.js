function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SrEGgnyZ1b":
        Script1();
        break;
      case "6nZpkqGrnx0":
        Script2();
        break;
      case "6LZwjy4NkBr":
        Script3();
        break;
      case "5lorZ7JAKSN":
        Script4();
        break;
      case "6mnbh0XmVNT":
        Script5();
        break;
      case "5YsswSzy0fr":
        Script6();
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
const id = '5khBnQuBOlp';
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
const id = '5khBnQuBOlp';
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
