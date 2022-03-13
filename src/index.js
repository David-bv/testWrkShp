import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import { EmployeesApp } from './EmployeesApp';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <EmployeesApp />
  </Provider>,
  document.getElementById('root')
);

