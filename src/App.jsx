import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import AllMeetupsPage from './components/pages/AllMeetups';
import FavoritesPage from './components/pages/Favorites';
import NewMeetupPage from './components/pages/NewMeetup';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
