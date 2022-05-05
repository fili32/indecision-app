import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        // let newOption = document.getElementsByTagName("input")[0].value
        const newOption = e.target.elements.option.value.trim()
        const error =  this.props.handleAddOption(newOption)
        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>add option</button>
                </form>
            </div>
        )
    }
}

