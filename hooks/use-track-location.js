import { useState, useContext } from "react";
import { ACTION_TYPES, StoreContent } from "@/store/store-context";

const useTrackLocation = () => {
  const [locationErrMsg, setLocationErrMsg] = useState("");
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  const { dispatch } = useContext(StoreContent);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    dispatch({
      type: ACTION_TYPES.SET_LAT_LONG,
      payload: { latLong: `${latitude},${longitude}` },
    });
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
    handleTrackLocation,
    locationErrMsg,
    isFindingLocation,
  };
};

export default useTrackLocation;
