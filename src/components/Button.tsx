interface Props {
  children: String;
  color?: "primary" | "secondary" | "danger";
  onCLick: () => void;
}

const Button = ({ children, onCLick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onCLick}>
      {children}
    </button>
  );
};

export default Button;
