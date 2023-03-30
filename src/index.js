import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropTypes from 'prop-types';
import Alert from './components/Alert';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="App">
      <h3>Alert
      <Alert text= "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      </h3>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();