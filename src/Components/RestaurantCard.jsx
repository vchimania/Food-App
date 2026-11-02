const styleCard = {
  backgroundColor: "#D3D3D3",
};
const RestaurantCard = (props) => {
  console.log("working");
  console.log(props);
  const { resData } = props;
  const { name, image, cuisines, rating,servings, cookTimeMinutes} =
    resData;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={image}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating}Stars</h4>
      <h4>serving:{servings}</h4>
      <h4>cookTimeMinutes:{cookTimeMinutes}</h4>
    </div>
  );
};
export default RestaurantCard;