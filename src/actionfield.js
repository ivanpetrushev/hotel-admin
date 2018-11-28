import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import {
  Edit, Delete
} from '@material-ui/icons';
import {withRouter, Link} from 'react-router-dom';

class ActionField extends React.Component {
  handleEditClick = (e, record) => {
    e.stopPropagation();
    this.props.history.push('/Hotel/' + record.id);
  }

  handleDeleteClick = (e, record) => {
    e.stopPropagation();

  }

  render() {
    const record = this.props.record;
    const source = this.props.source;

    return (
      <span>
        <IconButton
          onClick={(e) => this.handleEditClick(e, record)}
          aria-label="Edit"
        >
          <Edit/>
        </IconButton>
        <IconButton
          onClick={(e) => this.handleDeleteClick(e, record)}
          aria-label="Delete"
          component={Link}
          to={'/Hotel/alabala/' + record.id}
        >
          <Delete/>
        </IconButton>

      </span>
    );
  }
}

ActionField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default withRouter(ActionField);
