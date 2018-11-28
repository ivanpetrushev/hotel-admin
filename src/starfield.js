import React from 'react';
import PropTypes from 'prop-types';
import {
  StarRate, Edit, Delete
} from '@material-ui/icons';

class StarField extends React.Component {
  renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(<StarRate key={i}/>);
    }
    return arr;
  }

  render() {
    const record = this.props.record;
    const source = this.props.source;
    return (
      <span>{this.renderStars(record[source])}</span>
    );
  }
}

StarField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default StarField;
