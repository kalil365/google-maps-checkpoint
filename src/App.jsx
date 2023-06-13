import { Fragment } from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

import "./App.css";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center"> Google Map Checkpoint</h1>
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 36.848951, lng: 10.158502 }}
              zoom={10}
              mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
            
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;