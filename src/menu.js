import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';

const MyMenu = ({ resources, onMenuClick, logout }) => (
  <div>
    {resources.map(resource => (
      <MenuItemLink key={resource.name} to={`/${resource.name}`} primaryText={resource.name} onClick={onMenuClick} />
    ))}
    <MenuItemLink to="/custom-route" primaryText="Miscellaneous" onClick={onMenuClick} />
  </div>
);

const mapStateToProps = state => ({
  resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(MyMenu));

