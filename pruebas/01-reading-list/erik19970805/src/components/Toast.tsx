import { type FC, type PropsWithChildren } from 'react';

interface Props {
  onClick: () => void;
  alert: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export const Toast: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div className="toast z-10 toast-top toast-end">
      <div className={`alert alert-${props.alert} flex`}>
        <span>{props.children}</span>
        <button onClick={props.onClick}>X</button>
      </div>
    </div>
  );
};
