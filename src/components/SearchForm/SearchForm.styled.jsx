import { Component } from 'react';
import styled from 'styled-components';

const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 3px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #d2fff9;

  &:hover {
    background-color: #b4ebe4;
  }
`;

const StyledButtonLabel = styled.span`
  font-size: 16px;
`;

export class SearchForm extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    // console.log(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <StyledSearchForm onSubmit={this.handleSubmit}>
        <StyledButton type="submit" className="button">
          <StyledButtonLabel className="button-label">🔎</StyledButtonLabel>
        </StyledButton>

        <StyledInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </StyledSearchForm>
    );
  }
}