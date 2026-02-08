import { useState } from 'react';
import MainCourse from './pages/MainCourse';
import RedditAdsOTO from './pages/RedditAdsOTO';

function App() {
  const [page, setPage] = useState('main');

  if (page === 'oto') {
    return <RedditAdsOTO onBack={() => setPage('main')} />;
  }

  return <MainCourse onOTOClick={() => setPage('oto')} />;
}

export default App;
