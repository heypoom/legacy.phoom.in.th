if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js")
    .then(function(sw) {
      console.log("[ServiceWorker] Registration Complete. Scope is", sw.scope)
    }).catch(function(err) {
      console.error("[ServiceWorker]", err)
    })
}

$("document").ready(function() {
  $(".button-collapse").sideNav()

  var pjax = new Pjax({
    selectors: ["title", "ul.nav-links.right > li.link ", "ul.side-nav > li.link", "main"],
    scrollTo: false
  })
})

$(".icobutton").click(function() {
  // ...
})

$(".btn#pink").click(function() {
  $("header").css("background", "linear-gradient(to left, rgb(211, 16, 39), rgb(234, 56, 77))")
})

$(".btn#yellow").click(function() {
  $("header").css("background", "linear-gradient(to left, rgb(238, 9, 121), rgb(255, 106, 0))")
})

$(".btn#indigo").click(function() {
  $("header").css("background", "linear-gradient(to left, rgb(71, 118, 230), rgb(142, 84, 233))")
})

$(".btn#orange").click(function() {
  $("header").css("background", "linear-gradient(to left, rgb(255, 81, 47), rgb(221, 36, 118))")
})

$(".btn#amber").click(function() {
  $("header").css("background", "linear-gradient(to left, rgb(228, 58, 21), rgb(230, 82, 69))")
})

$(".btn#purple").click(function() {
  $("header").css("background", "linear-gradient(to left, rgb(218, 34, 255), rgb(151, 51, 238))")
})

$(".btn#teal").click(function() {
  $("header").css("background", "linear-gradient(to left, rgb(2, 170, 176), rgb(0, 205, 172))")
})

$(".btn#reset").click(function() {
  $("header").css("background", "linear-gradient(to left, #7474BF, #348AC7)")
})
