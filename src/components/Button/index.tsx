import { FC, ReactNode, Component } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type='button' onClick={onClick}>
      {children}
    </button>
  );
};

export class ButtonClass extends Component<ButtonProps> {
  render() {
    const { onClick, children } = this.props;
    return (
      <button type='button' onClick={onClick}>
        {children}
      </button>
    );
  }
}
