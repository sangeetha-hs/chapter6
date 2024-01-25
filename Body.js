import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
//import resList from "../utilis/mockData";

const Body = () => {
//local  state variable=super powerful variable

 
const [listOfRestuarant,setListOfRestuarant]=useState([]);

const [searchText,setSearchText]=useState([]);
const [filteredRestaurant,setFilteredRestaurant]=useState();
//whenever state variable update,react triggers a reconciliation cycle(re-renders the component)
console.log("body rendered")
useEffect (()=>{

fetchData();
},[])

const fetchData = async () => {

  const data = await fetch( "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
const json = await data.json();
console.log(json);
//optional chaining
//setListOfRestuarant(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);

setListOfRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

//conditional rendering=rendering based on the condition 
// if(listOfRestuarant.length===0){
// return<Shimmer/>
// }


  return  listOfRestuarant.length === 0 ?  (
    <Shimmer/>
  ):(
  <div className="body">
        
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} 
            onChange={(e)=>
            {
           setSearchText(e.target.value)       
               }}/>
            <button onClick={()=>{
          console.log(searchText)

          const filteredRestaurant=listOfRestuarant.filter( (res)=> 
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
            
            );
            setFilteredRestaurant(filteredRestaurant);
            }
            }>
              search</button>
          </div>
          <button className="filter-btn" 
          onClick={()=>{
            const filteredList=listOfRestuarant.filter(
              (res)=>res?.info?.avgRating > 4.3
              
              
               );
               setListOfRestuarant(filteredList);
        
          }}
          >
            Top Rated Restaurants</button>
            
        </div>
        <div className="res-container">
          {
            filteredRestaurant?.map((restaurant)=>{
              return <RestaurantCard  key={restaurant?.info?.id}resData={restaurant}/>
            })
          }
        </div>
  
      </div>
    )
  }

  
export default Body;  




