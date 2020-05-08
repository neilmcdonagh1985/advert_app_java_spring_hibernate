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
            categories: []
            
        }

        this.fetchAllAdverts = this.fetchAllAdverts.bind(this);
        this.addNewAdvert = this.addNewAdvert.bind(this);
        this.fetchAllCategories = this.fetchAllCategories.bind(this);
        
    }

    componentDidMount() {
        this.fetchAllAdverts();
        this.fetchAllCategories();
    }

    fetchAllAdverts() {
        fetch('http://localhost:8080/adverts')
            .then(response => response.json())
            .then(jsonData => this.setState({ data: jsonData['_embedded'].adverts }));
    }

    fetchAllCategories() {
        fetch('http://localhost:8080/categories')
        .then(response => response.json())
        .then(jsonData => this.setState({ categories: jsonData['_embedded'].categories}))
    }

    addNewAdvert(newAdvert) {
        this.setState({
            data: [...this.state.data, newAdvert]
        })

    }

    addNewCategory(newCategory) {
        this.setState({
            data: [...this.state.data, newCategory]
        })
    }


    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/new-advert" render={() => <NewAdvertFormContainer categories={this.state.categories} onNewCategoryAdded={this.addNewCategory} onNewAdvertAdded={this.addNewAdvert} />}></Route>
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