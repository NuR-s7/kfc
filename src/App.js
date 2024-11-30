import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import CategeoryPagePage from './pages/CategeoryPage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<CategoryPage />} />
          <Route path="/history" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
