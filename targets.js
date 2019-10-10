// ##########################################
// ### email media css ####################
// ##########################################
let medias = [
  {
    "find": /-webkit/gi,
    "replace": `@media screen and (-webkit-device-pixel-ratio)`
  },
  {
    "find": /-max600/gi,
    "replace": `@media screen and (max-width: 600px)`
  },
  {
    "find": /-dark/gi,
    "replace": `@media (prefers-color-scheme: dark)`
  },
  {
    "find": /-iphonex/gi,
    "replace": `@media screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3)`
  }
]

let query = document.head.innerHTML
  for(let media of medias) {
    query = query.replace(media.find, media.replace)
  }
document.head.innerHTML = query

// ##########################################
// ### email clients css ####################
// ##########################################

let targets = [
  {
    "find": /-android/gi,
    "replace": `@media screen and (pointer)`
  },
  {
    "find": /-apple10/gi,
    "replace": `.Singleton`
  },
  {
    "find": /-apple124/gi,
    "replace": `.apple-mail-implicit-dark-support`
  },
  {
    "find": /-gmail/gi,
    "replace": `u + .body`
  },
  {
    "find": /-androidgmail/gi,
    "replace": `div > u + .body`
  },
  {
    "find": /-mobilegmail/gi,
    "replace": `@media screen and (max-width: 480px)`
  },
  {
    "find": /-iOS10/gi,
    "replace": `@supports (-webkit-overflow-scrolling:touch) and (color:#ffff)`
  },
  {
    "find": /-yahoo/gi,
    "replace": `@media screen yahoo`
  },
  {
    "find": /-weboutlook/gi,
    "replace": `[class="x_outlook"]`
  },
  {
    "find": /-appsoutlook/gi,
    "replace": `body[data-outlook-cycle]`
  },
  {
    "find": /-iOSoutlook/gi,
    "replace": `[data-outlook-cycle*="INSERT_STYLES"]`
  },
  {
    "find": /-outlookmac/gi,
    "replace":`_:-webkit-full-screen, _::-webkit-full-page-media, _:future,:root .body:not(.Singleton)`
  }
];

let css = document.head.innerHTML
  for(let target of targets) {
    css = css.replace(target.find, target.replace)
  }
document.head.innerHTML = css

// ##########################################
// ### email clients html ###################
// ##########################################

let microsofts = [
  {
    "find": /<!--msoALL/gi,
    "replace": `<!--[if true]>`
  },
  {
    "find": /<!--mso2000/gi,
    "replace": `<!--[if mso 9]>`
  },
  {
    "find": /<!--mso2002/gi,
    "replace": `<!--[if mso 10]>`
  },
  {
    "find": /<!--mso2003/gi,
    "replace": `<!--[if mso 11]>`
  },
  {
    "find": /<!--mso2007/gi,
    "replace": `<!--[if mso 12]>`
  },
  {
    "find": /<!--mso2010/gi,
    "replace": `<!--[if mso 14]>`
  },
  {
    "find": /<!--mso2013/gi,
    "replace": `<!--[if mso 15]>`
  },
  {
    "find": /<!--mso2016/gi,
    "replace": `<!--[if mso 16]>`
  },
  {
    "find": /mso-->/gi,
    "replace": `<![endif]-->`
  }
];

let mso = document.body.innerHTML
  for(let microsoft of microsofts) {
    mso = mso.replace(microsoft.find, microsoft.replace)
  }
document.body.innerHTML = mso
