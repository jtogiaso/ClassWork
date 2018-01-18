import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Search from "./Search";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => {

        // if (res.data.Response === "True"){
          this.setState({ result: res.data })
          console.log(res.data);
        // }
        // else if (res.data.Response === "False") {
        //   this.setState({ result: { Title: "This title does not exist"} });  
        // }        
      })
      .catch(err => {

        console.log(err);
      
      });
  };

  handleInputChange = event => {

    // Getting the value and name of the input which triggered the change
    const {value } = event.target;

    // Updating the input's state
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Panel
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title
                ? <MovieDetail
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                  />
                : <h3>No results to display</h3>}
            </Panel>
          </Col>
          <Col size="md-4">
            <Panel heading="Search">
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
