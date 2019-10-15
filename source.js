const viewSourceBtn = document.querySelector('.viewSourceBtn');
const handleToggle = () => viewSourceBtn.classList.toggle('active');

viewSourceBtn.onclick = () => handleToggle();
viewSourceBtn.addEventListener('keyup', (event) => {
  if(event.keyCode === 13 || event.keyCode === 32) {
    handleToggle();
  }
});

let lang = document.querySelector(`html`).getAttribute(`lang`)
let headblock = document.querySelector(`head`).outerHTML
let bodyblock = document.querySelector(`body`).outerHTML

let finders = [
  {
    "find": /<link rel="stylesheet" href="markupstyle.css" type="text\/css">/gi,
    "replace":""
  },
  {
    "find": /<button class="viewSourceBtn"><\/button>/gi,
    "replace":""
  },
  {
    "find": /<textarea class="viewSourcePreview"><\/textarea>/gi,
    "replace":""
  },
  {
    "find": /<script src=\"targets.js\" type=\"text\/javascript\"><\/script>/gi,
    "replace":""
  },
  {
    "find": /<script src=\"source.js\" type=\"text\/javascript\"><\/script>/gi,
    "replace":""
  },
  {
    "find": /<!-- leave this line for functionality -->/gi,
    "replace":""
  },
  {
    "find": /<!-- it will be removed in the source preivew -->/gi,
    "replace":""
  }
];

for(let finder of finders){
  bodyblock = bodyblock.replace(finder.find, finder.replace);
}


let output =
`
<!DOCTYPE html>
<html lang="">
  ${headblock}
  ${bodyblock}
</html>
`

document.querySelector(`.viewSourcePreview`).innerHTML = output
