import React, { Component, Fragment } from 'react';
import FilteredAdvertListContainer from './FilteredAdvertListContainer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';


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
            <Fragment>
            <NavBar></NavBar>
            <FilteredAdvertListContainer></FilteredAdvertListContainer>
            </Fragment>
            

        )
    }
}

export default Main;