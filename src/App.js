import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavigation from './layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
      </Routes>
    </>
  );
}

export default App;
