import React from "react";
import { filmsMock } from "../../constants/filmsMock";
import FilmCard from "../../common/FilmCard";

const AllFilmsPage = () => {
    console.log("filmsMock", filmsMock);
    return (
        filmsMock.map((film) =>
            <FilmCard key={film.id} film={film}/>
        )
    );
};

export default AllFilmsPage;