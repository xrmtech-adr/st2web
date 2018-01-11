import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';

import store from './store';

import Menu from '@stackstorm/module-menu';
import RulesPanel from './rules-panel.component';

export default class Rules extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
      icon: PropTypes.string,
    })).isRequired,
  }

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <Menu location={this.props.location} routes={this.props.routes} />
          <RulesPanel {...this.props} />
        </div>
      </Provider>
    );
  }
}
