import React from 'react';

export type TextParagraphStyle =
  | 'display1'
  | 'display2'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall'
  | 'body16'
  | 'body14'
  | 'body12'
  | 'lead'
  | 'blockquote'
  | 'capitalized'
  | 'tiny'
  | 'link';

export type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface TextProps {
  text?: string;
  tag?: TextTags;
  paragraphStyle?: TextParagraphStyle;
  className?: string;
  textProps?: React.AllHTMLAttributes<HTMLParagraphElement | HTMLSpanElement | HTMLHeadingElement>;
}

export type RefType = HTMLParagraphElement | HTMLSpanElement | HTMLHeadingElement;
