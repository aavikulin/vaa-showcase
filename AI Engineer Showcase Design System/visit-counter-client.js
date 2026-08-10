(function () {
  const script = document.currentScript;
  const config = window.VISIT_COUNTER_CONFIG || {};
  const project = String(config.project || script?.dataset.project || "vaa-showcase").trim();
  const endpoint = String(config.endpoint || script?.dataset.endpoint || "/_visit").trim();
  const enabled = config.enabled !== false && script?.dataset.enabled !== "false";

  if (!enabled || !project || !endpoint || window.location.protocol === "file:") {
    return;
  }

  let url;
  try {
    url = new URL(endpoint, window.location.href);
  } catch (_error) {
    return;
  }

  url.searchParams.set("project", project);
  url.searchParams.set("t", String(Date.now()));

  const sessionKey = `visit-counter:${project}:counted`;
  try {
    if (window.sessionStorage.getItem(sessionKey) === "1") {
      return;
    }
    window.sessionStorage.setItem(sessionKey, "1");
  } catch (_error) {
    return;
  }

  if (navigator.sendBeacon) {
    try {
      if (navigator.sendBeacon(url.toString(), new Blob([], { type: "text/plain" }))) {
        return;
      }
    } catch (_error) {
      // Fall through to fetch.
    }
  }

  fetch(url.toString(), {
    method: "POST",
    mode: "no-cors",
    cache: "no-store",
    keepalive: true,
  }).catch(() => {
    try {
      window.sessionStorage.removeItem(sessionKey);
    } catch (_error) {}
  });
})();
