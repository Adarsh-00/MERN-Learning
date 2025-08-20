import './Card.css';

const Cards = ({pic, name, des}) => {
  return (
    <div className='card'>
      <img src={pic} alt="profile" />
      <div className="detail">
        <h4>{name} </h4>
        <p>{des}</p>
      </div>
    </div>
  );
}

export default Cards;
