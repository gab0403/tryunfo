import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const {
      filterName,
      filterRare,
      filterTrunfo,
      onInputChange,
    } = this.props;
    return (
      <div>
        <label htmlFor="filter-name">
          Nome:
          <input
            id="filter-name"
            data-testid="name-filter"
            type="text"
            name="filterName"
            value={ filterName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="filter-rare">
          Raridade
          <select
            id="filter-rare"
            data-testid="rare-filter"
            name="filterRare"
            value={ filterRare }
            onChange={ onInputChange }
          >
            <option value="todas">Todas </option>
            <option value="normal">Normal </option>
            <option value="raro">Raro </option>
            <option value="muito raro">Muito Raro </option>
          </select>
        </label>
        <label htmlFor="filter-trunfo">
          Super Trunfo
          <input
            id="filter-trunfo"
            data-testid="trunfo-filter"
            type="checkbox"
            name="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
