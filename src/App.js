import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({ [name]: value }, () => this.validateForm());
  }

  onSaveButtonClick(e) {
    e.preventDefault();
  }

  validateForm() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const numAtrrMax = 210;
    const numAtrrMin = 0;
    const numAtrrCardMax = 90;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const card = (
      cardName !== ''
     && cardImage !== ''
     && cardDescription !== ''
     && cardRare !== ''
    );
    const attr1 = (cardAttr1 >= numAtrrMin && cardAttr1 <= numAtrrCardMax);
    const attr2 = (cardAttr2 >= numAtrrMin && cardAttr2 <= numAtrrCardMax);
    const attr3 = (cardAttr3 >= numAtrrMin && cardAttr3 <= numAtrrCardMax);
    if (
      card === true
      && attr1 === true
      && attr2 === true
      && attr3 === true
      && sum <= numAtrrMax
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
