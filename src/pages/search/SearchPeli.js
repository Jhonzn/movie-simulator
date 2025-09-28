import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constants";

import "./Search.scss";

function SearchPeli() {
  const location = useLocation();
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchParams = queryString.parse(location.search);
      const { s } = searchParams;
      
      if (s) {
        const response = await fetch(
          `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
        );
        const movies = await response.json();
        
        setSearchValue(s);
        setMovieList(movies);
      }
    })();
  }, [location.search]);

  const onChangeSearch = (e) => {
    const newSearchValue = e.target.value;
    const urlParams = queryString.stringify({ s: newSearchValue });
    navigate(`?${urlParams}`);
    setSearchValue(newSearchValue);
  };

  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu película</h1>
        <Input value={searchValue} onChange={onChangeSearch} />
      </Col>
      {movieList.results && (
        <Row>
          
            <MovieCatalog movies={movieList} />
          
        </Row>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default SearchPeli;