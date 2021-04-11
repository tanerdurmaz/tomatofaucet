import './TomatoFaucet.css';
import React from 'react';
import Paper from '@material-ui/core/Paper';


class TomatoFaucet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            errorMessage: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

        if (this.state.value.length > 35 || this.state.value.length < 26) {
            this.setState({ errorMessage: 'invalid address: ' + this.state.value });
            //alert('wrong wallet address length: ' + this.state.value);
        }
        else {
            alert('submitted wallet: ' + this.state.value);
            this.setState({ errorMessage: '' });
        }

        event.preventDefault();
    }

    render() {
        return (
            <div className="App" >
                <h1>A TOMATO FAUCET</h1>
                <Paper className="Paper" elevation={24} type="submit" value="GET TOMATO" >
                    <div >
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input className="InputText" placeholder="enter wallet address" type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>

                            <input className="button" type="submit" value="GET TOMATO" />

                        </form>
                    </div>
                </Paper>

                {this.state.errorMessage &&
                    <div>
                        <Paper className="error" elevation={24}  >
                            <div className="errorText"> {this.state.errorMessage} </div>
                        </Paper>
                    </div>
                }
            </div>
        );
    }
}
export default TomatoFaucet;
