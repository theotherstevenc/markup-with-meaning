// ##########################################
// ### show source, don't render ############
// ##########################################


let newWaveHTML = document.querySelector(`html`).outerHTML
let source = document.createElement(`textarea`)
source.setAttribute(`class`, `source`)
source.setAttribute(`style`,
`
  margin: 0px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5em;
  font-family: monospace;
`
)
document.body.appendChild(source)
source.innerHTML = newWaveHTML
