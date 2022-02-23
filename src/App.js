import React from 'react';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: 'false',
      hasTrunfo: 'false',
      isSaveButtonDisabled: 'false',
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value });
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    addNewTopic(this.state);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: 'false',
      hasTrunfo: 'false',
      isSaveButtonDisabled: 'false',
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
      </div>
    );
  }
}

App.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: 'false',
  isSaveButtonDisabled: 'false',
};

export default App;
