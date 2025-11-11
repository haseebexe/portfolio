import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop resets scroll on route changes.
// It also checks for a hash (fragment) and attempts to scroll to that element instead.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (e.g. /page#section), try to scroll to that element
    if (hash) {
      const id = hash.replace('#', '');
      // Small timeout to allow the element to render if needed
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        // fallback to top if element not found
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 0);
      return;
    }

    // Default: scroll to top on path change
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}
