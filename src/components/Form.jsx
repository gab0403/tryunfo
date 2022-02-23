import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="title">
          Nome:
          <input id="title" data-testid="name-input" type="text" name="title" />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea id="description" data-testid="description-input" name="description" />
        </label>

        <label htmlFor="attr1">
          Attr01:
          <input id="attr1" data-testid="attr1-input" type="number" name="attr1" />
        </label>

        <label htmlFor="attr2">
          Attr02:
          <input id="attr2" data-testid="attr2-input" type="number" name="attr2" />
        </label>

        <label htmlFor="attr3">
          Attr03:
          <input id="attr3" data-testid="attr3-input" type="number" name="attr3" />
        </label>

        <label htmlFor="image">
          Imagem:
          <input id="image" data-testid="image-input" type="text" name="image" />
        </label>

        <label htmlFor="rare">
          Raridade
          <select id="rare" data-testid="rare-input" name="rare">
            <option value="normal">Normal </option>
            <option value="raro">Raro </option>
            <option value="muito raro">Super Raro </option>
          </select>
        </label>

        <label htmlFor="checkbox">
          Super Trunfo
          <input
            id="checkbox"
            data-testid="trunfo-input"
            type="checkbox"
            name="checkbox"
          />
        </label>

        <button data-testid="save-button" type="submit"> Salvar </button>

      </form>

    );
  }
}

export default Form;
