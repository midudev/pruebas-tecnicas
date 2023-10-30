/* eslint-disable react/no-children-prop */
/* eslint-disable react/display-name */
import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { RefType, TextProps } from './Interfaces';
import styles from './Text.module.css';

const Text = forwardRef<RefType, TextProps>(
  ({
    tag = 'p', text = 'Text', paragraphStyle = 'no_styles', className, ...res
  }, ref) => createElement(tag, {
    ...res.textProps,
    ref,
    children: text,
    className: classNames(
      { [styles[tag]]: true },
      { [styles[paragraphStyle]]: tag === 'p' },
      className,
    ),
  }),
);

export default Text;
