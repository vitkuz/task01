import React from 'react';

class HeaderMovieSinglePage extends React.Component {

    render() {

        return (
            <header className="section header header-movie header-cover-1">
                <div className="section-content">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="field-movie-poster">
                                <img src={`http://via.placeholder.com/350x500/CC0000`} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="field-movie-title">Pulb fiction</h1>
                            <p className="field-movie-category">Oscar-wining Movies</p>
                            <div className="field-movie-year">1994</div><div className="field-length">145 min</div>
                            <div className="filed-movie-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aut consequuntur dolores ea eos et hic impedit, in ipsam ipsum laudantium nesciunt quisquam quod quos ratione saepe velit veniam?
                            </div>

                            <div className="field-movie-director">

                            </div>

                            <div className="field-movie-cast">

                            </div>

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderMovieSinglePage;