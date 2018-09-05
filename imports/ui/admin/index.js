import React, {Component} from 'react'

class AdminIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Admin dataProvider={ this.props.data}>
                <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate}  />
            </Admin>


        )
    }
}

export default AdminIndex