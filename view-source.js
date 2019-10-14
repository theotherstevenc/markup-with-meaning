let viewSourceButton = document.createElement(`button`)
viewSourceButton.setAttribute(`id`, `view-source`)
viewSourceButton.setAttribute(`style`,
`
  position: absolute; right: 0; top: 0;
  padding: .5em; background: none; border: 1px solid green;
  font-size: 1em; opacity: .9; z-index:9999; background:white;
`
)
document.body.appendChild(viewSourceButton)
viewSourceButton.innerHTML = `View Source`

document.getElementById('view-source').addEventListener("click", function() {

let finders = [
  {
    "find": /<script src=\"targets.js\" type=\"text\/javascript\"><\/script>/gi,
    "replace":""
  },
  {
    "find": /<script src=\"view-source.js\" type=\"text\/javascript\"><\/script>/gi,
    "replace":""
  }
];

viewSourceButton.remove()

let markup = document.querySelector(`html`).outerHTML
for(let finder of finders){
  markup = markup.replace(finder.find, finder.replace);
}

let source = document.createElement(`textarea`)
source.setAttribute(`class`, `source`)
source.setAttribute(`style`,
`
  margin: 0px; height: 100vh; width: 100vw;
  box-sizing: border-box; position: absolute; top: 0; left: 0;
  font-size: 1.5em; font-family: monospace; background: #404040; color: #fafafa;`
)
document.body.appendChild(source)
source.innerHTML = markup

});
