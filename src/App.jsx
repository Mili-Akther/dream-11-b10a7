import { useState } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Banner from "./Component/Banner/Banner";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Header/Navbar";
import Newsletter from "./Component/Newsletter/Newsletter";

function App() {
  const [price, setPrice] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isActive, SetIsActive] = useState({
    card: true,
    status: "available",
  });

  const handleIsActiveState = (status) => {
    if (status == "card") {
      SetIsActive({
        card: true,
        status: "available",
      });
    } else {
      SetIsActive({
        card: false,
        status: "selected",
      });
    }
  };

  console.log(isActive);

  const handleIncreasePrice = (pr) => {
    setPrice(price + pr);
  };

  const handleDeletePrice = (playerId) => {
    const player = selectedPlayers.find((p) => p.playerId == playerId);
    setPrice(price - player.biddingPrice);
    
  };

  const handleDelete = (playerId) => {
    handleDeletePrice(playerId);
    const newPlayer = selectedPlayers.filter((p) => p.playerId != playerId);
    setSelectedPlayers(newPlayer);
  };

  return (
    <>
      <div>
        <Navbar price={price} selectedPlayers={selectedPlayers}></Navbar>
        <Banner></Banner>
        {/* card section */}
        <Card
          handleIncreasePrice={handleIncreasePrice}
          handleDelete={handleDelete}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        ></Card>
        {/* <AvailablePlayers
          handleSelectedPlayer={handleSelectedPlayer}
        ></AvailablePlayers> */}

        {/* Newsletter */}
        <Newsletter></Newsletter>
        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
