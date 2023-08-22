import Spoiler, { Ajar } from './modules/spoiler.src.js'

new Spoiler({
  wrappersSelector: '.spoiler',
  maxWorkWidth: 10000,
  animationDuration: 300,

  // ajar: new Ajar({
  //   deleteButtonAfterOpening: false,
  //   defaultHeight: '2em'
  // })
})