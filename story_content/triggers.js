function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jS79rMF34a":
        Script1();
        break;
      case "5yDGoQRvNzl":
        Script2();
        break;
      case "6dNLI0oMcK9":
        Script3();
        break;
      case "5hTwNRU7ETy":
        Script4();
        break;
      case "6Feua6mLZFn":
        Script5();
        break;
      case "5wMjfeRJLOn":
        Script6();
        break;
      case "6PFembLslDa":
        Script7();
        break;
      case "6a1Bv24Kz2O":
        Script8();
        break;
      case "6VEY91fcRFw":
        Script9();
        break;
      case "6qOaUn7l2WQ":
        Script10();
        break;
      case "6Vtr5Yhl7KE":
        Script11();
        break;
      case "6nfBd2lrJoN":
        Script12();
        break;
      case "6RNRNwRDbja":
        Script13();
        break;
      case "6lgzXdDa5Sp":
        Script14();
        break;
      case "67O7Gk7YYh5":
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
