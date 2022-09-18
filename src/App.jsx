import React from 'react';
import  { Route, Switch } from "react-router-dom";
import './styles/index.scss';
import AllFilmsPage from "./entities/AllFilmsPage";
import FavouriteFilmsPage from "./entities/FavouriteFilmsPage";
import PageLayout from "./common/PageLayout";

const App = () =>
    <Switch>
        <PageLayout>
            <Route path="/films_all">
                <AllFilmsPage/>
            </Route>
            <Route path="/films_favourite">
                <FavouriteFilmsPage/>
            </Route>
        </PageLayout>
    </Switch>;

export default App;
