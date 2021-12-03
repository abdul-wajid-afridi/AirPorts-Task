import { travelFinder } from "./Components/GettingRoutes";

const path1 = travelFinder("ISB", "LHR");
const path2 = travelFinder("ISB", "NYC");

function App() {
  return (
    <div>
      <p>ISB TO NYC: {path1}</p>
      <p>ISB TO NYC: {path2}</p>
    </div>
  );
}

export default App;
