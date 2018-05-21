import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
