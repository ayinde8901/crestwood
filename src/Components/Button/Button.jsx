import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  to,
  onClick,
  variant = "primary",
  type = "button"
}) => {
  // If `to` exists → render Link
  if (to) {
    return (
      <Link to={to} className={`btn btn-${variant}`}>
        {children}
      </Link>
    );
  }

  // Else render button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
