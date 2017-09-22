import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const printListOfNames = (list) => {
    return list.map(name => <span key={name} className="actor">{name}</span>);
}

const HeaderMovieSinglePage = (props) => {
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
                                <img src={props.movie.img} alt="Movie Poster" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="field-movie-title">{props.movie.title}</h1>
                            <p className="field-movie-subtitle bold">{props.movie.subtitle}</p>
                            <div className="field-movie-year">{props.movie.year}</div>
                            <div className="field-length">Duration: 145 min</div>
                            <div className="field-movie-description">
                                { props.movie.description }
                            </div>

                            <div className="field-movie-director">
                                <span className="field-label">Director:</span>
                                { props.movie.director }
                            </div>

                            <div className="field-movie-cast">
                                <span className="field-label">Cast:</span>
                                { printListOfNames(props.movie.cast) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMovieSinglePage;

