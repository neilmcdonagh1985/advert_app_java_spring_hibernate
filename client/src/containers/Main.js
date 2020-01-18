import React, { Component, Fragment } from 'react';
import FilteredAdvertListContainer from './FilteredAdvertListContainer';
import NewAdvertFormContainer from './NewAdvertFormContainer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../style/style.css'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.fetchAllAdverts = this.fetchAllAdverts.bind(this);    
    }

    componentDidMount() {
        this.fetchAllAdverts()
    }

    fetchAllAdverts() {
        fetch('http://localhost:8080/adverts')
        .then(response => response.json())
        .then(jsonData => this.setState({ data: jsonData['_embedded'].adverts}));
    }

    render() {
        return(
            <Router>
              <Fragment>
                <NavBar />
                <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/new-advert" component={NewAdvertFormContainer}></Route>
                <Route path="/adverts" component={FilteredAdvertListContainer}></Route>
                </Switch>
              </Fragment>
            </Router>
            
            

        )
    }
}

const Home = () => (
    <div>
        <h1>This is the Homepage</h1>
    </div>
)

export default Main;