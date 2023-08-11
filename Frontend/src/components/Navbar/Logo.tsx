import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <h2
      onClick={handleClick}
      className="select-none text-xl text-secondary-foreground hover:cursor-pointer"
    >
      Tokopakedi<span className="font-bold text-primary">Play</span>
    </h2>
  );
};

export default Logo;
