// browser entry for every page: starts the interactions once the HTML is parsed (module scripts are deferred),
// then keeps them in sync as the router swaps pages without reloading.
import { initDWW } from "./behavior";
import { initMotion } from "./motion";
import { enableRouter } from "./router";

// motion is decoration: it starts in its own idle task so it never adds to the main start-up task
const idle = window.requestIdleCallback || ((f) => setTimeout(f, 200));
const start = () => {
  const stopDWW = initDWW();
  let stopMotion = () => {}, live = true;
  idle(() => { if (live) stopMotion = initMotion(); });
  return () => { live = false; stopDWW(); stopMotion(); };
};
let stop = start();
enableRouter(() => { stop(); stop = start(); });
