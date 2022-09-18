import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const PageLayout = ({ children }) => {
    console.log("children", children);
    return (
        <div className={styles.films_container}>
            <h1 className={styles.film_card_container__title}>All Films</h1>
            <Link to="/films_all">
                <button className={styles.film_card_container__all_films} type="button">See All Films</button>
            </Link>
            <Link to="/films_favourite">
                <button className={styles.film_card_container__favourite_films} type="button">See Favourite Films</button>
            </Link>
            <div className={styles.films_card_container}>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;