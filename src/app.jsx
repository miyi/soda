import React from "react";
import SamplePage from "./landing.jsx";
import Map from './map.js'
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, Link, Redirect, browserHistory } from "react-router";
import { App } from "neal-react";


// class SampleApp extends React.Component {
//   render() {
//     return (
//       <App
//         googleAnalyticsKey="UA-42490151-3"
//         segmentKey="Pd3LXILLoxlOKXi9zWTCyhK2MRvygFhF"
//         stripeKey="pk_BkaOyHcEiCFaUiEADe7UH6Wq7D6f7"
//         history={ browserHistory }>
//         { this.props.children }
//       </App>
//     );
//   }
// }
// <Route path="*" component={ SamplePage }/>
ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path="/" component={ SamplePage } history={ browserHistory} />
    </Router>
), document.getElementById("main"));
