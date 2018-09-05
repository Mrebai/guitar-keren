import React,{Component} from "react";
import {gql} from 'apollo-boost'
import { Query } from "react-apollo";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './payment/CheckoutForm';

export const userQuery = gql`
    query user{
        user{
            
            email
            
        }
    }
`;

class App extends Component {

    constructor(props) {
        super(props);

    }

    user = ( ) => (
        <Query query={userQuery}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <div>
                        {
                            console.log(data)
                        }

                    </div>

                );
            }}
        </Query>
    );

    metorLogin = () => {

        Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
            if (err) {
                console.log('Handle errors here: ', err);
            }
        });
    };

    metorLoginGoogle = () => {

        Meteor.loginWithGoogle({requestPermissions: ['profile']}, function(err){
            if (err) {
                console.log('Handle errors here: ', err);
            }
        });
    };
    render(){
        return (
            <div>
                <p> hello world</p>
                {
                    this.user()
                }

                <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                    <div className="example">
                        <h1>React Stripe Elements Example</h1>
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                        <button onClick={() => this.metorLogin()}>facebook</button>
                        <button onClick={() => this.metorLoginGoogle()}>Google</button>
                    </div>
                </StripeProvider>
            </div>

        )
  }
}
export default App
