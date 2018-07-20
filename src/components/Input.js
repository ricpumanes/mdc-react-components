import React, { Component } from 'react';
import {MDCTextField} from '@material/textfield';
import PropTypes from 'prop-types';

export default class Input extends Component {
  static propTypes = {
    prop: PropTypes
  }

  componentDidMount() {
    const { classNameKey } = this.props;
    console.log(document.querySelector(classNameKey))
    new MDCTextField(document.querySelector(classNameKey));
  }

  render() {
    const { labelText = 'Label', id, classNameKey, className, type, required } = this.props;
    return (
      <div className={`mdc-text-field mdc-text-field--box ${id}`}>
        <input id={id} className={`${classNameKey} ${className} mdc-text-field__input`} type={type} required={required} />
        <label className="mdc-floating-label" htmlFor={id}>{labelText}</label>
        <div className="mdc-line-ripple"></div>
      </div>
    );
  }
}

