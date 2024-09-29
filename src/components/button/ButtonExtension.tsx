import { Link } from "react-router-dom";

interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

export const LinkButton = ({ to, children }: LinkButtonProps) => {
  <Link to={to}>{children}</Link>;
};

export const CommonButton = ({
  onClick,
  children,
  ...props
}: CommonButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};
