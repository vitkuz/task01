import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const printListOfNames = list => list.map(name => <span key={name} className="actor">{name}</span>);


class HeaderMovieSinglePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }
    render() {
        const movie = this.props.database[this.props.match.params.id];

        return (
            <div className="section header header-movie header-cover-1">
                <div className="gradient-2">
                    <div className="section-content">

                        <div className="row">
                            <Link to="/" className="btn pull-rigth">Make search</Link>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="field-movie-poster">
                                    <img src={movie.img} alt="Movie Poster" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h1 className="field-movie-title">{movie.title}</h1>
                                <p className="field-movie-subtitle bold">{movie.subtitle}</p>
                                <div className="field-movie-year">{movie.year}</div>
                                <div className="field-length">Duration: 145 min</div>
                                <div className="field-movie-description">
                                    { movie.description }
                                </div>

                                <div className="field-movie-director">
                                    <span className="field-label">Director:</span>
                                    { movie.director }
                                </div>

                                <div className="field-movie-cast">
                                    <span className="field-label">Cast:</span>
                                    { printListOfNames(movie.cast) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderMovieSinglePage.propTypes = {
    database: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};

export default HeaderMovieSinglePage;

