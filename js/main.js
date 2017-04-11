$("document").ready(function() {
  $(".button-collapse").sideNav()
  var pjax = new Pjax({
    selectors: ["ul.nav-links", "main"]
  })
})
