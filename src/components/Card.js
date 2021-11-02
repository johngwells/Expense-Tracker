import "./Card.css";

// cant use className on other components the normal way because it will be overwritten by the 'Card.js' className. Creating it dynamically will add other classNames if needed
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
