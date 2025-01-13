import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Banner from "./Component/Banner/Banner";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Header/Navbar";
import Newsletter from "./Component/Newsletter/Newsletter";

function App() {

// const [selectedPlayers, setSelectedPlayers] = useState([]);

// const handleSelectedPlayer = (Players) => {
//   const isexist = selectedPlayers.find((p) => p.id == Players.id);

//   if (isexist) {
//     alert("r add kora jabeh na");
//   } else {
   
//     const newProduct = [...selectedPlayers, Players];
//      setSelectedPlayers(newProduct);
//   }
// };
// console.log(selectedPlayers);

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <AvailablePlayers></AvailablePlayers>
        {/* card section */}
        <Card></Card>
        {/* Newsletter */}
        <Newsletter></Newsletter>
        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
