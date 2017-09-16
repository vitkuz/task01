import React from 'react';
import ToggleGroup from '../utils/ToggleGroup.jsx';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term:'posts', query: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleChange(e) {
        this.setState({query: e.target.value});
    }

    handleTypeChange(term) {
        this.setState({term});
        console.log(this.state.term);
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log('json', json);
            });

    }

    render() {

        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input type="text" onChange={this.handleChange} value={this.state.query} className="form-control" placeholder="Search..." />
                    <span className="input-group-addon" id="basic-addon2">fake api</span>
                </div>
                <div className="dflex dflex-justify mt1">
                    <div>
                        <ToggleGroup updateParent={this.handleTypeChange} selected={0} buttons={[{title:'posts', value: 'posts'}, {title: 'comments', value: 'commnets'}]} />
                    </div>
                    <div>
                        <button className="btn btn-default">Submit</button>
                    </div>
                </div>

            </form>
        );
    }
}

export default Search;