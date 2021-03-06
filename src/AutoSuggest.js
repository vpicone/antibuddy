// @flow
/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { withStyles, createStyleSheet } from 'material-ui/styles';

function renderInput(inputProps) {
  const { classes, home, value, ref, ...other } = inputProps;

  return (
    <div>
      <TextField
        autoFocus
        className={classes.textField}
        value={value}
        inputRef={ref}
        InputProps={{
          classes: {
            input: classes.input,
          },
          ...other,
        }}
      />
    </div>
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(
          // eslint-disable-next-line no-confusing-arrow
          (part, index) =>
            part.highlight
              ? <span key={index} style={{ fontWeight: 300 }}>
                {part.text}
              </span>
              : <strong key={index} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>,
        )}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value, fireSuggestions) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  return inputLength === 0
    ? []
    : fireSuggestions.filter((suggestion) => {
      const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}

const styleSheet = createStyleSheet('IntegrationAutosuggest', theme => ({
  container: {
    flex: 1,
    height: theme.spacing.unit * 8,
    maxWidth: 800,
    width: '60%',
    margin: 'auto',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    width: '60%',
    margin: 'auto',
    maxWidth: 800,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 'auto',
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
}));

class IntegrationAutosuggest extends Component {
  state = {
    value: '',
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.fireSuggestions),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        onSuggestionSelected={this.props.onSuggestionSelected}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: 'Enter an antigen/antibody',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
  fireSuggestions: PropTypes.array.isRequired,
  onSuggestionSelected: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(IntegrationAutosuggest);
