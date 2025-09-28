import React from "react";
import {Row, Col} from "antd";
import MovieList from "../components/MovieList";
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import {URL_API, API} from "../utils/constants";
import Footer from "../components/Footer";


export default function Home() {

    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES`);
    const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES`);
    const topRatedMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES`);

    return (
        <>
            <SliderMovies movies={newMovies}/>
            <Row>
                <Col span={12}>

                    <MovieList title = "Peliculas Populares" movies={popularMovies} />
                
                </Col>
                <Col span={12}>

                    <MovieList title = "Top Mejores Peliculas Puntuadas" movies={topRatedMovies} />
                
                </Col>
            </Row>
            <Footer />
        </>
    );
}