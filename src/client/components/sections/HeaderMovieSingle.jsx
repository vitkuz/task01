import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovieDetails } from '../../actions/actions';

const printListOfGenres = list => list.map(genre => <span key={genre.id} className="actor">{genre.name}</span>);

const printListOfCountries = list => list.map(country => <span key={country.name} className="actor">{country.name}</span>);

const printListOfPosters = list => list.map((poster, i) => <div key={i}><img className="poster" src={`https://image.tmdb.org/t/p/w500/${poster.file_path}`} alt="" /></div>);

// const printListOfVideos = list => list.map(poster => <div key={poster.file_path}><img className="poster" src={`https://image.tmdb.org/t/p/w500/${poster.file_path}`} alt="" /></div>);

class HeaderMovieSinglePage extends React.Component {
    componentDidMount() {
        console.log('Component HeaderMovieSinglePage did mount!');
        window.scrollTo(0, 0);
    }
    componentWillUpdate() {
        console.log('Component HeaderMovieSinglePage will update!');
        window.scrollTo(0, 0);
    }
    render() {
        const movieID = parseInt(this.props.match.params.id, 10);
        // Step 1: search in cache
        let movie = this.props.cache.find((item) => {
            return item.id === movieID;
        });
        // Step 2: if empty search in search results
        if (this.props.database && !movie) {
            movie = this.props.database.find((item) => {
                return item.id === movieID;
            });
            console.log(movie);
            this.props.getMovieDetails(movieID);
        }
        // Step 3: if empty show dummyText
        if (!movie) {
            return (
                <div className="section mt1">
                    <div className="section-content">
                        Search is outdated. Please wait
                    </div>
                </div>
            );
        }
        const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        return (
            <div>
                <div className="section header header-movie header-cover-1">
                    <div className="gradient-2">
                        <div className="section-content">
                            <div className="row">
                                <Link to="/" className="btn pull-rigth">Make search</Link>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="field-movie-poster">
                                        <img src={posterURL} alt="Movie Poster" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h1 className="field-movie-title">{movie.title}</h1>
                                    <p className="field-movie-tagline bold">{movie.tagline}</p>
                                    <div className="field-movie-year">{movie.release_date}</div>
                                    <div className="field-length">Budget: {movie.budget} $</div>
                                    <div className="field-movie-description">
                                        { movie.overview }
                                    </div>
                                    <div className="field-movie-genres">
                                        { movie.genres ? printListOfGenres(movie.genres) : null }
                                    </div>
                                    <div className="field-movie-countries">
                                        { movie.production_countries ? printListOfCountries(movie.production_countries) : null }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field-movie-images">
                    <div className="field-movie-images-content">
                        { movie.images ? printListOfPosters(movie.images.posters) : null }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        database: state.searchResults.byId,
        cache: state.cache.movies,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMovieDetails,
    }, dispatch);
}


HeaderMovieSinglePage.propTypes = {
    database: PropTypes.arrayOf(PropTypes.object).isRequired,
    cache: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
    getMovieDetails: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMovieSinglePage);

