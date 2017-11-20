import React from 'react';

// Page components
import HeaderSearch, { loadData } from './components/sections/HeaderSearch';
import HeaderMovie from './components/sections/HeaderMovieSingle';
import MovieGrid from './components/results/MovieGrid';

import Footer from './components/sections/Footer';

import PageNotFound from './pages/PageNotFound';

export default [
    {
        loadData,
        path: '/movies',
        component: HeaderSearch,
    },
    {
        path: '/movies/:id',
        component: HeaderMovie,
    },
    {
        path: '/movies',
        component: MovieGrid,
    },
    {
        path: '*',
        component: Footer,
    },
];

// class Routes extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <Switch>
//                     <Route
//                       exact
//                       path="/movies"
//                       component={HeaderSearch} />
//                     <Route
//                       exact
//                       path="/movies/:id"
//                       component={HeaderMovie} />
//                     <Redirect exact from="/" to="/movies" />
//                     <Route
//                       path="*"
//                       component={PageNotFound} />
//                 </Switch>
//                 <Route
//                   path="/movies"
//                   component={MovieGrid} />
//                 <Footer />
//             </div>
//         );
//     }
// }

// export default Routes;
