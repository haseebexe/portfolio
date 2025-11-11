import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress for smooth visual effect
NProgress.configure({
  showSpinner: false,
  speed: 700,         // smooth finish
  minimum: 0.2,       // start visibly
  trickleRate: 0.02,  // gradual movement
  trickleSpeed: 200,  // interval in ms
});

export const LoadingBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    NProgress.start(); // start animation
    window.scrollTo(0, 0); // reset scroll

    // aesthetic delay, then finish
    const timer = setTimeout(() => {
      NProgress.done();
    }, 400); // short delay for smoothness

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null;
};
