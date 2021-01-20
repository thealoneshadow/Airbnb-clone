import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=6&m=1066999762&s=612x612&w=0&h=SQ2803yCqKwHiSrqJPVOU-DJwaYswbI2wDq3Z-dV5DA=" title="Goa 5StarLuxury" description="Comfortable private places with room for friends or family"/>
        <Card src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=6&m=1066999762&s=612x612&w=0&h=SQ2803yCqKwHiSrqJPVOU-DJwaYswbI2wDq3Z-dV5DA=" title="Goa 5StarLuxury" description="Comfortable private places with room for friends or family"/>
        <Card src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=6&m=1066999762&s=612x612&w=0&h=SQ2803yCqKwHiSrqJPVOU-DJwaYswbI2wDq3Z-dV5DA=" title="Goa 5StarLuxury" description="Comfortable private places with room for friends or family"/>
      </div>
      <div className="home__section">
      <Card src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=6&m=1066999762&s=612x612&w=0&h=SQ2803yCqKwHiSrqJPVOU-DJwaYswbI2wDq3Z-dV5DA=" title="Goa 5StarLuxury" description="Comfortable private places with room for friends or family" price="$120"/>
      <Card src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=6&m=1066999762&s=612x612&w=0&h=SQ2803yCqKwHiSrqJPVOU-DJwaYswbI2wDq3Z-dV5DA=" title="Goa 5StarLuxury" description="Comfortable private places with room for friends or family" price="$120"/>
      <Card src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=6&m=1066999762&s=612x612&w=0&h=SQ2803yCqKwHiSrqJPVOU-DJwaYswbI2wDq3Z-dV5DA=" title="Goa 5StarLuxury" description="Comfortable private places with room for friends or family" price="$120"/>
    
      </div>
    </div>
  );
}

export default Home;
