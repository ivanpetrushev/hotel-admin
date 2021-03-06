import React, {Component} from 'react';
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import buildGraphcoolProvider from 'ra-data-graphcool';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from "apollo-cache-inmemory";
import {CityList, CityEdit, CityCreate} from './cities';
import {HotelList, HotelEdit} from "./hotels";
import Dashboard from './dashboard';
import Menu from './menu';

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
      <Admin dataProvider={dataProvider} dashboard={Dashboard} >
        <Resource name="City" list={CityList} edit={CityEdit} create={CityCreate} />
        <Resource name="Hotel" list={HotelList} edit={HotelEdit}/>
      </Admin>
    );
  }
}

export default App;
