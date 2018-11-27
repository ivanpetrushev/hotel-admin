import React, {Component} from 'react';
import {Admin, Resource, ListGuesser} from 'react-admin';
import buildGraphcoolProvider from 'ra-data-graphcool';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from "apollo-cache-inmemory";
import {CityList} from './cities';
import {HotelList} from "./hotels";

const link = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjo9qjp1p32hh01281qa1kwea"
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

class App extends Component {
  constructor() {
    super();
    this.state = {dataProvider: null};
  }

  componentDidMount() {
    buildGraphcoolProvider({clientOptions: {uri: 'https://api.graph.cool/simple/v1/cjo9qjp1p32hh01281qa1kwea'}})
      .then(dataProvider => this.setState({dataProvider}));
  }

  render() {
    const {dataProvider} = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="City" list={CityList}/>
        <Resource name="Hotel" list={HotelList}/>
      </Admin>
    );
  }
}

export default App;
