import { useEffect } from 'react';

// set title for component
function useTitle(title = 'Cosmos', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title = title !== 'Cosmos' ? `${title} - Cosmos` : title;
    }
  }, []);

  return null;
}

export default useTitle;
