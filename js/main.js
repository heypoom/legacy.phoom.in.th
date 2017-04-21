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

  $(".side-nav > li.link").click(function() {
    $(".side-nav").sideNav("hide")
  })

  var pjax = new Pjax({
    selectors: [
      "title", "ul.nav-links.right > li.link ",
      "ul.side-nav > li.link", "main"
    ],
    scrollTo: false
  })

  $("#message").trigger("autoresize")
})
