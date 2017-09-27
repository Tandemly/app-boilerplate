// @flow
import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

// base classes for component
const classes = ["button", styles.button];
type Props = {
  /** the text label on the button */
  children?: string,
  /** an alternate way to pass a label to display on the button (overrides `children`) */
  text?: string,
  /** classnames to add to the rendered component */
  className?: string
};

/**
 * A basic button component.
 */
const Button = (props: Props) => (
  <button className={cx(classes, props.className)}>
    {props.text || props.children}
  </button>
);

export default Button;
