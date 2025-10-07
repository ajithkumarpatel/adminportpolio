import React from 'react';
import PortfolioPage from './views/PortfolioPage';
import AdminPage from './views/AdminPage';

const App: React.FC = () => {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
    };

    // Listen for browser navigation (back/forward buttons)
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  // Simple router to switch between the main portfolio and the admin panel.
  if (path.startsWith('/admin')) {
    return <AdminPage />;
  }

  return <PortfolioPage />;
};

export default App;