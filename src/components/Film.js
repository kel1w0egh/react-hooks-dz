import React from "react";
import './Film.css';

export default function Film(props) {
    return (
        <div className="film-container">
            <div className="film-poster">
                <img src={props.filmPoster} alt=""/>
            </div>
            <div className="film-info">
                <h3>Основная информация о фильме</h3>
                <p>Режиссёр: {props.producerName}</p>
                <p>Год выпуска: {props.releaseYear}</p>
                <h3>Информация об актёрском складе фильма</h3>
                {props.actors.map((value) => <p>{value}</p>)}
            </div>
        </div>
    );
}