import React from 'react';
// import { connect } from 'react-redux';

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummy: [],
            value: '',
        };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleClick1() {
        const { dummy } = this.state;
        const ids = this.state.dummy.map(item => item.id);
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;
        dummy.push({ id: maxId + 1 });
        this.setState({ dummy });

    }
    handleClick2() {
        this.props.testFn(parseInt('1',10));
    }
    handleInputChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        return (
            <div>
                <div>
                    <h1 className="title">
                        { this.props.qwerty }
                    </h1>
                    <form action="">
                        <input type="text" className="input1" onChange={this.handleInputChange} value={this.state.value} />
                    </form>
                </div>
                <div>
                    <a role="button" tabIndex="-1" className="btn" onClick={this.handleClick1}>Click</a>
                    <a role="button" tabIndex="-1" className="btn-fn" onClick={this.handleClick2}>Click</a>
                </div>
                <div className="item-list">
                    {
                        this.state.dummy.map((item) => {
                            return (
                                <div key={item.id}>1</div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Test;
