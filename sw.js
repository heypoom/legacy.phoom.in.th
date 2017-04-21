importScripts("js/sw-toolbox.js")
importScripts("js/sw-toolbox-cache.js")

toolbox.precache([
  "/", "404.html",
  "css/main.css",
  "img/flask.blue.svg", "img/me.jpg",
  "js/pjax.js", "js/main.js", "js/sw-toolbox.js", "js/sw-toolbox-cache.js",
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://code.jquery.com/jquery-3.2.1.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/js/materialize.min.js"
])

toolbox.options.debug = true

self.addEventListener("install", function install() {
  self.skipWaiting()
})

self.addEventListener("activate", function activate(e) {
  e.waitUntil(self.clients.claim())
})

toolbox.router.get("/(.*)", function get(req, vals, opts) {
  return toolbox.networkFirst(req, vals, opts)
    .catch(function(error) {
      if (req.method === "GET" && req.headers.get("accept").includes("text/html")) {
        return toolbox.cacheOnly(new Request("/404.html"), vals, opts)
      }
      throw error
    })
})

toolbox.router.get("/css/*.css", toolbox.fastest)
toolbox.router.get("/js/*.js", toolbox.fastest)
toolbox.router.get("/fonts/*", toolbox.fastest)
toolbox.router.get("/img/.jpg", toolbox.fastest)
toolbox.router.get("/img/*.svg", toolbox.fastest)
toolbox.router.get("/img/*.png", toolbox.fastest)
toolbox.router.get("/browserconfig.xml", toolbox.fastest)
toolbox.router.get("/crossdomain.xml", toolbox.fastest)
toolbox.router.get("/manifest.json", toolbox.fastest)
