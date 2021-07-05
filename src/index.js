import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* <App /> -> 이렇게 쓰는 건 리액트가 컴포넌트를 다루는 방식임
리액트는 컴포넌트를 사용해서 html처럼 작성하려는 경우에 필요해
자바스크립트와 html 사이의 이러한 조합을 jsx라고 불러 */
