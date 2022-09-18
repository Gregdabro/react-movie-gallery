import React from "react";
import styles from "./index.module.scss";

const FilmCard = ({ film }) => {
    const { id, imgUrl, movieName, releaseYear, isFavourite, description,} = film;

    return (
        <div className={styles.film_card}>
            <img alt="picture" src={require(`/src/${imgUrl}`)}/>
        </div>
    );
};

export default FilmCard;