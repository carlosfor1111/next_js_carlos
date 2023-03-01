import { useState } from "react";

const useTrackLocation = () => {
  const [locationErrMsg, setLocationErrMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;

    setLatLong(`${latitude},${longtitude}`);
    setLocationErrMsg("");
    setIsFindingLocation(false);
  };

  const error = () => {
    setIsFindingLocation(false);

    setLocationErrMsg("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    setIsFindingLocation(true);
    if (!navigator.geolocation) {
      setLocationErrMsg("Geolocation is not supported by your browser");
      setIsFindingLocation(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    latLong,
    handleTrackLocation,
    locationErrMsg,
    isFindingLocation,
  };
};

export default useTrackLocation;
