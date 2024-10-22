import "../App.css";
const Watch = ({ name, price, real_image }) => {
  return (
    <div className="child">
      <img className="watchImg" src={real_image} alt="" />
      <h3>Watch name : {name}</h3>
      <h4>Price : {price}$</h4>
    </div>
  );
};

export default Watch;
