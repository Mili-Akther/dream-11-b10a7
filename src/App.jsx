import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Header/Navbar";
import Newsletter from "./Component/Newsletter/Newsletter";

function App() {
  const [isAvailablePlayersVisible, setIsAvailablePlayersVisible] =
    useState(true);
  const maxPlayers = 6; 
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
      toast.error("Not enough balance! Please claim free credit.",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",});
    }
    
  };

  // Claim free credit button action
  const handleClaimCredit = () => {
    setBalance(balance + 10000000); // Add 100 units to the user's balance
    toast.success("You have claimed 10000000 free credits!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
   toast.warn("You Removed a Player", {
     position: "top-right",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: false,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });

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
          balance={balance}
        ></Card>
        {/* <AvailablePlayers
          handleSelectedPlayer={handleSelectedPlayer}
        ></AvailablePlayers> */}
        {/* Newsletter */}
        <Newsletter></Newsletter>
        {/* Footer */}
        <Footer></Footer>
        <ToastContainer />;
      </div>
    </>
  );
}

export default App;
