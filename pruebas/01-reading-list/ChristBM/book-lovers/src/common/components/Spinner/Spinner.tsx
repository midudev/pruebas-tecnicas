/* eslint-disable spellcheck/spell-checker */

import { SpinnerProps } from './Interfaces';

/* eslint-disable react/no-unknown-property */
const DEFAULT_COLORS = {
  track: '#fff)',
  line: 'var(--primary-color)',
};

export default function Spinner({ colors = DEFAULT_COLORS, ...res }: SpinnerProps) {
  return (
    <div className="loader">
      <style jsx>
        {`
      .loader {
        display: inline-block;
        width: ${res.size ? res.size : 10.76}px;
        height: ${res.size ? res.size : 10.76}px;
        border: 2px solid ${colors.line};
        border-bottom-color: ${colors.track};
        border-left-color: ${colors.line};
        border-top-color: ${colors.line};
        border-radius: 50%;
        box-sizing: border-box;
        animation: spinnerAnimation 1.2s linear infinite;
      }

      @keyframes spinnerAnimation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
      }
        `}
      </style>
    </div>
  );
}
