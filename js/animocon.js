function isIOSSafari() {
  var userAgent
  userAgent = window.navigator.userAgent
  return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)
}

function isTouch() {
  var isIETouch
  isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  return [].indexOf.call(window, "ontouchstart") >= 0 || isIETouch
}

var clickHandler = isIOSSafari() || isTouch() ? "touchstart" : "click"

function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key]
    }
  }
  return a
}

function Animocon(el, options) {
  this.el = el
  this.options = extend({}, this.options)
  extend(this.options, options)

  this.checked = false
  this.timeline = new mojs.Timeline()

  for (var i = 0, len = this.options.tweens.length i < len ++i) {
    this.timeline.add(this.options.tweens[i])
  }

  var self = this

  this.el.addEventListener(clickHandler, function() {
    if (self.checked) {
      self.options.onUnCheck()
    } else {
      self.options.onCheck()
      self.timeline.replay()
    }
    self.checked = !self.checked
  })
}

Animocon.prototype.options = {
  tweens : [new mojs.Burst({})],
  onCheck: function() { return false },
  onUnCheck: function() { return false }
}

$("document").ready(function() {
  var elem = document.querySelector(".icobutton")
  var elSpan = document.querySelector(".icobutton > span")

  var anim = new Animocon(elem, {
    tweens: [
      // burst animation
      new mojs.Burst({
        parent: elem,
        count: 	6,
        radius: {40:90},
        angle: 	135,
        degree: 90,
        children: {
          fill : 	[ "#988ADE", "#DE8AA0", "#8AAEDE", "#8ADEAD", "#DEC58A", "#8AD1DE" ],
          scale: 	1,
          radius: { 7 : 0 },
          opacity: 0.6,
          duration: 	1500,
          delay: 	350,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
      }),
      // burst animation
      new mojs.Burst({
        parent: elem,
        count: 6,
        angle: 45,
        degree:  -90,
        radius: 	{40:100},
        children: {
          fill: 	[ "#988ADE", "#DE8AA0", "#8AAEDE", "#8ADEAD", "#DEC58A", "#8AD1DE" ],
          scale: 	1,
          radius: { 7 : 0 },
          opacity: 0.6,
          duration: 	1500,
          delay: 	550,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
      }),
      // ring animation
      new mojs.Shape({
        parent: 	elem,
        radius: 	{0: 50},
        fill: "transparent",
        stroke: 	"#988ADE",
        strokeWidth: {35:0},
        opacity: 0.6,
        duration: 	750,
        easing: mojs.easing.bezier(0, 1, 0.5, 1)
      }),
      // ring animation
      new mojs.Shape({
        parent: 	elem,
        radius: 	{0: 50},
        fill: "transparent",
        stroke: 	"#988ADE",
        strokeWidth: 	{35:0},
        opacity: 	0.6,
        duration: 750,
        delay: 200,
        easing: 	mojs.easing.bezier(0, 1, 0.5, 1)
      }),
      // icon scale animationUP
      new mojs.Tween({
        duration : 1500,
        onUpdate: function(progress) {
          if (progress > 0.3) {
            var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43)
            elSpan.style.WebkitTransform = elSpan.style.transform = "scale3d(" + elasticOutProgress + "," + elasticOutProgress + ",1) rotate3d(0,0,1," + 90*(1-elasticOutProgress) + "deg)"
          } else {
            elSpan.style.WebkitTransform = elSpan.style.transform = "scale3d(0,0,1)"
          }
        }
      })
    ],
    onCheck : function() {
      elem.style.color = "#988ADE"
    },
    onUnCheck : function() {
      elem.style.color = "#C0C1C3"
    }
  })
})
