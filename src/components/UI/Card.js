import './Card.css';
const Card = (props) => {
    console.log('data--',props.children)
 return <div className="card">{props.children}</div>
}

export default Card;