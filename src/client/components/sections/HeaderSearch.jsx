import React from 'react';
import Search from '../search/Search';

class HeaderSearch extends React.Component {

    render() {
        return (
            <header className="section header header-search header-cover-1">
                <div className="gradient-1">
                    <div className="section-content">
                        <h1>netflixroulette </h1>
                        <p>Find Your Movie</p>
                        <Search updateSearchBy={this.props.updateSearchBy} searchByFlag={this.props.searchByFlag} handleSearch={this.props.handleSearch}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderSearch;