import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Resource, Admin } from 'react-admin';

class AdminIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <Admin dataProvider={data}>
        <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} />
      </Admin>
    );
  }
}
AdminIndex.prototype = {
  data: PropTypes.object,
};

export default AdminIndex;
