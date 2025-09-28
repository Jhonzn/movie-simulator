import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuTop from './components/MenuTop';
 
import Home from './pages/home';
import NewMovie from './pages/new-movies';
import Search from './pages/search';
import Popular from './pages/popular';
import Movie from './pages/movie';
import Error404 from './pages/error404';
import PelisAccion from './pages/pelis-accion';
 
export default function App() {
  const { Header, Content } = Layout;
 
  return (
    <Layout>
      <Router>
        <Header style={{zIndex:1}}>
          <MenuTop />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-movies" element={<NewMovie />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/pelis-accion" element={<PelisAccion />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  );
};

