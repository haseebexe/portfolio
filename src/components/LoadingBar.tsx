import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress for smooth, gradient-style loading
NProgress.configure({
  showSpinner: false, // remove the spinner
  speed: 700,         // slower, smooth completion
  minimum: 0.1,       // start visible
  trickleRate: 0.02,  // gradual progress
  trickleSpeed: 200,  // interval in ms
});

export const LoadingBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    NProgress.start();       // start the bar
    window.scrollTo(0, 0);   // reset scroll

    // simulate a natural delay for the bar to feel smooth
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done();       // ensure cleanup if unmounting
    };
  }, [pathname]);

  return null;
};
