import React from 'react';
import ReactDOM from 'react-dom';

import Titlelvl1 from './components/title';

import styles from './styles/main.scss'

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <Titlelvl1 styleTitle={ styles['page-title'] } value="Hello world!"/>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}

// The router will be automatically installed
// If you want to use it:
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* <Router basename="/">
    <main>
        <Switch >
            <Route path="/" exact component={ ComponentName } />
            ... other pages
        </Switch>
    </main>
</Router> */
