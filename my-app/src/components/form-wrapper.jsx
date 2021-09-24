import React from 'react';
import FormClass from './form';
import './styles.css';

class FormWrapper extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);

        this.state = {
            value: '',
            buttonActive: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(newValue) {
        this.setState(() => ({
            value: newValue,
            buttonActive: newValue.toLowerCase().includes('реакт'),
        }));
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    render() {
        console.log('Render');
        return (
            <>
                <FormClass
                    handleInputChange={this.handleInputChange}
                    inputValue={this.state.value}
                    disabled={this.state.buttonActive}
                />
            </>
        );
    }
}
export default FormWrapper;
