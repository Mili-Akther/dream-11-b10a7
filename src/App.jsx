import { useState } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Banner from "./Component/Banner/Banner";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Header/Navbar";
import Newsletter from "./Component/Newsletter/Newsletter";

function App() {
  const [isAvailablePlayersVisible, setIsAvailablePlayersVisible] =
    useState(true);
  const maxPlayers = 6; // Maximum players allowed
  const [price, setPrice] = useState(0);
  const [balance, setBalance] = useState(0);
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

  // Increase the total price spent
  const handleIncreasePrice = (pr) => {
    if (balance >= pr) {
      setPrice(price + pr);
      setBalance(balance - pr);
    } else {
      alert("Not enough balance! Please claim free credit.");
    }
  };

  // Claim free credit button action
  const handleClaimCredit = () => {
    setBalance(balance + 10000000); // Add 100 units to the user's balance
    alert("You have claimed 10000000 free credits!");
  };

  const handleDeletePrice = (playerId) => {
    const player = selectedPlayers.find((p) => p.playerId == playerId);
    setPrice(price - player.biddingPrice);
    setBalance(balance + player.biddingPrice);
  };

  const handleDelete = (playerId) => {
    handleDeletePrice(playerId);
    const newPlayer = selectedPlayers.filter((p) => p.playerId != playerId);
    setSelectedPlayers(newPlayer);
  };

const handleAddMorePlayers = () => {
  setIsAvailablePlayersVisible(true); 
   handleIsActiveState("card");
};

  return (
    <>
      <div>
        <Navbar
          price={price}
          selectedPlayers={selectedPlayers}
          balance={balance}
        ></Navbar>
        <Banner handleClaimCredit={handleClaimCredit}></Banner>
        {/* card section */}
        <Card
          handleIncreasePrice={handleIncreasePrice}
          handleDelete={handleDelete}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
          handleAddMorePlayers={handleAddMorePlayers}
          isAvailablePlayersVisible={isAvailablePlayersVisible}
          maxPlayers={maxPlayers}
          setIsAvailablePlayersVisible={setIsAvailablePlayersVisible}
         
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
