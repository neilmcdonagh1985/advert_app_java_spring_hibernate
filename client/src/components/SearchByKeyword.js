import React, { Component, Fragment } from 'react';
import FilteredAdvertList from './FilteredAdvertList';

class SearchByKeyword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""

        }
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20)});
    }

    render() {
        let filteredAdverts = this.props.adverts.filter(
            (advert) => {
                return advert.description.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <Fragment>
            <div>
                <input label="search for keyword(s)" type="text" value={this.state.search}
                onChange={this.updateSearch} />
                <button onClick={this.props.handleReturnToOptions}>
                    Return to Options
                </button>
                  <FilteredAdvertList adverts={filteredAdverts}/>                 
            </div>
            </Fragment>
        )
    }
}

export default SearchByKeyword;