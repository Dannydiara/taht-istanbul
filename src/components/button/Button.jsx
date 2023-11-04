import "./Button.scss";

const Button = ({ text, icon, style, link }) => {
  return (
    <a href={link} className="button" style={style}>
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </a>
  );
};

export default Button;
