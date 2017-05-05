// Setup Service Workers
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js")
    .then(function(sw) {
      console.log("[ServiceWorker] Registration Complete. Scope is", sw.scope)
    }).catch(function(err) {
      console.error("[ServiceWorker]", err)
    })
}

// Initialize and Re-initialize jQuery Event Handlers
function init() {
  $(".side-nav > li.link").click(function() {
    $(".side-nav").sideNav("hide")
  })

  $(".wip").click(function() {
    $(this).fadeOut()
  })
}

$("document").ready(function() {
  // Setup Pjax
  var pjax = new Pjax({
    selectors: [
      "title", "main",
      "ul.nav-links.right > li.link ",
      "ul.side-nav > li.link",
    ],
    scrollTo: false
  })

  // One-Time Event Handlers
  $(".button-collapse").sideNav()
  $("*[data-tooltip]").tooltip({delay: 50})

  init()
})

// Re-initialize Event Handlers on Pjax
$(document).on('pjax:complete', function() {
  init()
})
