import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetupsPage from './components/pages/AllMeetups';
import FavoritesPage from './components/pages/Favorites';
import NewMeetupPage from './components/pages/NewMeetup';

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
