import { Route, Routes } from 'react-router-dom';

import DetailPage from '../pages/detail/DetailPage';
import FavoritesPage from '../pages/favorites/FavoritesPage';
import HomePage from '../pages/home/HomePage';

const View = () => {
  return (
    <div className="view">
      <div className="page">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/movie/:id" Component={DetailPage} />
          <Route path="/my-favorites" Component={FavoritesPage} />
        </Routes>
      </div>
    </div>
  )
}

export default View;
