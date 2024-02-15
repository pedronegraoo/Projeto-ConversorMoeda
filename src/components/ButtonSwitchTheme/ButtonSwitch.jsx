import Switch from "react-switch";

function ButtonSwitch({ theme, toggleTheme }) {
  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      width={40}
      height={15}
      handleDiameter={20}
      onColor="#EBEBEB"
      offColor="#242424"
    />
  );
}

export default ButtonSwitch;
