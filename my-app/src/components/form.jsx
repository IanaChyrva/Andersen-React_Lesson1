import React from 'react';

class FormClass extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    handleChange = (e) => {
        this.props.handleInputChange(e.target.value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleClick = (e) => {
        e.preventDefault();
        this.inputRef.current.focus();
        console.log('Focus changed');
    };

    render() {
        return (
            <form action='' onSubmit={this.handleSubmit}>
                <label htmlFor=''>
                    Type any text
                    <input
                        type='text'
                        onChange={this.handleChange}
                        value={this.props.inputValue}
                        ref={this.inputRef}
                    />
                </label>
                <button disabled={this.props.disabled}>Send</button>
                <button onClick={this.handleClick} data-in-focus={false}>
                    Change Focus
                </button>
            </form>
        );
    }
}

export default FormClass;
