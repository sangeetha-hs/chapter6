import { CDN_URL } from "../utilis/constants";

const RestaurantCard = (props) => {
    // console.log("props info:", props?.resData[0].info.name)
    // console.log(RestaurantCard )
    const { resData } = props;
  
    const {
        cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } =resData?.info;
    console.log(props.resData.info);
    return (
      <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
        <img className="res-logo"  src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h3 style={{width:"inherit"}}>{cuisines.join(",")}</h3> 
        <h3>{avgRating}stars</h3>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    )
  }
  
  //media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv" + cloudinaryImageId} 
  
  
  
export default RestaurantCard;  