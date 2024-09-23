// import React, {  } from 'react';
import { render } from 'react-dom';
import './style.css';
import Select from 'react-select';
import React, { Component, PureComponent, Fragment } from 'react';

class Select extends PureComponent {
  state = {
    options: [
      {
        name: 'Select…..........................',
        value: null,
      },
      {
        name: 'chocolate',
        value: 'chocolate',
      },
      {
        name: 'strawberry',
        value: 'strawberry',
      },
      {
        name: 'Vanilla',
        value: 'Vanilla',
      },
    ],

    value: '?',
  };

  // check this function
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    if (event.target.value == 'OPTION-A') {
      // do your code here - after dropdown value changed
    }
  };

  render() {
    const { options, value } = this.state;

    return (
      <Fragment>
        <select onChange={this.handleChange} value={value}>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <h1>Favorite : {value}</h1>
      </Fragment>
    );
  }
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class App extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(
      function () {
        this.setState({ selectedOption });
      }.bind(this),
      1000
    );
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      // <AppForm/>
    );
  }
}

render(<App />, document.getElementById('root'));
