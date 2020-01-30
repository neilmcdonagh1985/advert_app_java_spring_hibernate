import React, { Component, Fragment } from 'react';
import FilterAdvert from './FilterAdvert';
import NewAdvertFormContainer from './NewAdvertFormContainer';
import EditSeller from '../components/EditSeller';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../style/style.css'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            
        }

        this.fetchAllAdverts = this.fetchAllAdverts.bind(this);
        this.addNewAdvert = this.addNewAdvert.bind(this);
        
    }

    componentDidMount() {
        this.fetchAllAdverts()
    }

    fetchAllAdverts() {
        fetch('http://localhost:8080/adverts')
            .then(response => response.json())
            .then(jsonData => this.setState({ data: jsonData['_embedded'].adverts }));
    }

    addNewAdvert(newAdvert) {
        this.setState({
            data: [...this.state.data, newAdvert]
        })

    }


    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/new-advert" render={() => <NewAdvertFormContainer onNewAdvertAdded={this.addNewAdvert} />}></Route>
                        <Route path="/adverts" render={() => <FilterAdvert />} />
                        <Route path="/sellers" render={(props) => <EditSeller {... props} />} />
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