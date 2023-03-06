import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/new-meet-up' element={<NewMeetupPage />} />
      </Routes>
    </>
  );
}

export default App;
