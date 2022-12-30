const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register() {
  if (isLocalhost) {
    console.log("service worker disabled because running on localhost");
    return;
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register(`/sw.js`).then(
        function (registration) {
          // Registration was successful
          console.log("[SW] registered on scope: ", registration.scope);
        },
        function (err) {
          // registration failed :(
          console.log("[SW] failed to register : ", err);
        }
      );
    });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
