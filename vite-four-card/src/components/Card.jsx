import "./card.css";
import clsx from "clsx";

const Card = (props) => {
  return (
    <div
      className={clsx(
        "card",
        { supervisor: props.title === "Supervisor" },
        { team: props.title === "Team Builder" },
        { karma: props.title === "Karma" },
        { calculator: props.title === "Calculator" }
      )}
    >
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.text}</p>
      <img className="card-image" src={props.src} alt={`${props.title} icon`} />
    </div>
  );
};

export default Card;
