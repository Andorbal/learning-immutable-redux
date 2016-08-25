import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import classNames from 'classnames';

let number = 0;

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleBorder() {
    this.props.dispatch({
      type: 'toggle-border',
    });
  }

  toggleFont() {
    this.props.dispatch({
      type: 'toggle-font',
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.style !== nextProps.style;
  }

  render() {
    console.log(`[${number++}] Rendering StyleSelector...`);

    const { border, font } = this.props.style;

    const classnames = classNames({
      'container': true,
      'alternate-border': border,
      'alternate-font': font,
    })

    return (
      <div className={classnames}>
        <div>
          <span>Toggle alternate </span>
          <button onClick={e => this.toggleBorder()}>Border</button>
          <button onClick={e => this.toggleFont()}>Font</button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

const getStyleFromState = state => state.get('style');
const transformStyle = createSelector(
  [getStyleFromState],
  style => {
    console.log(`[${number++}] Calculating StyleSelector...`);

    return style.toObject();
  }
);

const mapStateToProps = state => {
  return {
    style: transformStyle(state),
  };
};

export default connect(mapStateToProps)(StyleSelector);
