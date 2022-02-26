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
    this.cardDelete = this.cardDelete.bind(this);
    this.validateTrunfo = this.validateTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      tryunfo: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validateForm());
  }
  // }

  onSaveButtonClick(e) {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const addNewCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((previous) => ({
      tryunfo: [...previous.tryunfo, addNewCard],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }, () => { this.validateTrunfo(); });
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

  cardDelete({ target }) {
    const { tryunfo } = this.state;
    const deleteCard = tryunfo.filter(({ cardName }) => target.name !== cardName);
    this.setState({
      tryunfo: deleteCard,
    }, () => { this.validateTrunfo(); });
  }

  validateTrunfo() {
    const { tryunfo } = this.state;
    let existTrunfo = true;
    tryunfo.forEach((trunfo) => {
      if (trunfo.cardTrunfo) {
        this.setState({ hasTrunfo: true });
        existTrunfo = false;
      }
    });
    if (existTrunfo) this.setState({ hasTrunfo: false });
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
      hasTrunfo,
      isSaveButtonDisabled,
      tryunfo,
    } = this.state;
    return (
      <div>
        <div className="title">
          <h1>Tryunfo</h1>
          <h1> Pré-visualização </h1>
        </div>
        <section className="conteiner-card">
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
            hasTrunfo={ hasTrunfo }
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
        </section>
        <section>
          {
            tryunfo
              .map((card) => (
                <div key={ card.cardName }>
                  <Card key={ card.cardName } { ...card } />
                  <button
                    data-testid="delete-button"
                    type="button"
                    name={ card.cardName }
                    onClick={ this.cardDelete }
                  >
                    Excluir
                  </button>
                </div>))
          }
        </section>

      </div>
    );
  }
}
export default App;
