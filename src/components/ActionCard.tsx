enum Bg {
  green = "#4cb050",
  red = "#f44235",
  orange = "#ff6f01",
  blue = "#00b8d4",
}

interface IActionCard {
  icon: React.ReactElement;
  title: string;
  bg: "green" | "red" | "orange" | "blue";
}

const ActionCard: React.FC<IActionCard> = ({ icon, title, bg }) => {
  return (
    <div
      style={{ background: Bg[bg] }}
      className={`flex p-2 rounded shadow-lg text-2xl text-white justify-center items-center flex-col`}
    >
      <div className="text-5xl">{icon}</div>
      {title}
    </div>
  );
};

export default ActionCard;
