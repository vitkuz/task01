import React from 'react';
import Item from './item';


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummy: [],
            value: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleClick() {
        const {dummy} = this.state;
        const ids = this.state.dummy.map(item => item.id);
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;
        dummy.push({id: maxId + 1});
        this.setState({dummy});
    }
    handleInputChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        return (
            <div>
                <div>
                    <form action="">
                        <input type="text" className="input1" onChange={this.handleInputChange} value={this.state.value} />
                    </form>
                </div>
                <div>
                    <a role="button" tabIndex="-1" className="btn" onClick={this.handleClick}>Click</a>
                </div>
                <div className="item-list">
                    {
                        this.state.dummy.map((item) => {
                            return (
                                <Item key={item.id} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Test;
