
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AdminIndex } from '../../ui/admin'
import buildGraphQLProvider from 'ra-data-graphql-simple';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import App from '../../ui/App';
// http link

const client = new ApolloClient({
  uri: '/graphql',
  request: operation => operation.setContext(() => ({
    headers: {
      authorization: Accounts._storedLoginToken(),
    },
  })),
});


Meteor.startup(() => {
  buildGraphQLProvider({ client }).then(data => render(

    <BrowserRouter>

      <Switch>
        <Route
          path="/admin"
          render={() => <AdminIndex data={data} />
                    }
        />
        <Route render={match => (
          <ApolloProvider client={client}>
            <App client={client} />
          </ApolloProvider>
        )}
        />
      </Switch>
    </BrowserRouter>,


    document.getElementById('app'),
  ));
});
