import React from 'react';
import PropTypes from 'prop-types';

const HeaderMovieSinglePage = () => {
    return (
        <div className="section header header-movie header-cover-1">
            <div className="gradient-2">
                <div className="section-content">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="field-movie-poster">
                                <img src={'http://via.placeholder.com/350x500/CC0000'} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="field-movie-title">Pulb fiction</h1>
                            <p className="field-movie-category">Oscar-wining Movies</p>
                            <div className="field-movie-year">1994</div><div className="field-length">145 min</div>
                            <div className="filed-movie-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aut
                                consequuntur dolores ea eos et hic impedit, in ipsam ipsum laudantium
                                nesciunt quisquam quod quos ratione saepe velit veniam?
                            </div>

                            <div className="field-movie-director">
                                test
                            </div>

                            <div className="field-movie-cast">
                                test
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMovieSinglePage;

