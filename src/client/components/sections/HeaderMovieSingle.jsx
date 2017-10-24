import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-image-slider';

import { getMovieDetails } from '../../actions/actions';

const printListOfGenres = list => list.map(genre => <span key={genre.id} className="actor">{genre.name}</span>);

const printListOfCountries = list => list.map(country => <span key={country.name} className="actor">{country.name}</span>);

const printListOfPosters = list => (list.map((poster) => {
    if (poster.file_path) {
        return <div key={poster.file_path}><img className="poster" src={`https://image.tmdb.org/t/p/w500/${poster.file_path}`} alt="" /></div>;
    }
    return null;
}));

const printListOfVideos = list => list.map(video => <iframe key={video.key} width="560" height="315" src={`https://www.youtube.com/embed/${video.key}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder="0" allowFullScreen title={video.name} />);

class HeaderMovieSinglePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }
    getMovie(id) {
        const movie = this.props.cache.find((item) => {
            return item.id === id;
        });
        if (!movie) {
            this.props.getMovieDetails(id);
            return null;
        }
        return movie;
    }
    render() {
        const movieID = parseInt(this.props.match.params.id, 10);
        const movie = this.getMovie(movieID);
        if (!movie) {
            return (
                <div className="section mt1">
                    <div className="section-content">
                        <div className="loader" />
                    </div>
                </div>
            );
        }
        const posterURL = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null;
        const posters = movie.images || movie.images.posters ? movie.images.posters : null;
        const videos = movie.videos || movie.videos.results ? movie.videos.results : null;
        return (
            <div>
                <div className="section header header-movie header-cover-1">
                    <div className="gradient-2">
                        <div className="section-content">
                            <div className="row">
                                <Link to="/" className="btn pull-rigth search-submit-button">Make search</Link>
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
                <Slider images={movie.images.posters} isInfinite delay={5000}>
                    { posters ? printListOfPosters(posters) : null }
                </Slider>
                <div style={{ textAlign: 'center' }}>
                    { videos ? printListOfVideos(videos) : null }
                </div>
            </div>
        );
    }
}

// selector
const getMovies = state => state.allIds.map(id => state.byId[id]);

function mapStateToProps(state) {
    return {
        cache: getMovies(state.cache),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMovieDetails,
    }, dispatch);
}

HeaderMovieSinglePage.propTypes = {
    cache: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
    getMovieDetails: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMovieSinglePage);

