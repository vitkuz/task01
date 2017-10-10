import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const printListOfNames = list => list.map(name => <span key={name} className="actor">{name}</span>);


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
        if (!this.props.database) {
            return (
                <div className="section mt1">
                    <div className="section-content">
                        Search is outdated. Please wait
                    </div>
                </div>
            );
        }
        const movie = this.props.database.find((item) => {
            return item.unit === parseInt(this.props.match.params.id, 10);
        });
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
                                    <img src={movie.poster} alt="Movie Poster" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h1 className="field-movie-title">{movie.show_title}</h1>
                                <p className="field-movie-subtitle bold">{movie.category}</p>
                                <div className="field-movie-year">{movie.release_year}</div>
                                <div className="field-length">Duration: 145 min</div>
                                <div className="field-movie-description">
                                    { movie.summary }
                                </div>

                                <div className="field-movie-director">
                                    <span className="field-label">Director:</span>
                                    { movie.director }
                                </div>

                                <div className="field-movie-cast">
                                    <span className="field-label">Cast:</span>
                                    { printListOfNames(movie.show_cast.split(', ')) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        database: state.searchResults,
    };
}

HeaderMovieSinglePage.propTypes = {
    database: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};

export default connect(mapStateToProps)(HeaderMovieSinglePage);

