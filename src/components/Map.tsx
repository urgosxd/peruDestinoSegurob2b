'use client'

import { GoogleMap,MarkerF,InfoWindowF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";
//Map's styling
const defaultMapContainerStyle = {
    width: '90%',
    height: '50vh',
    borderRadius: '15px 0px 0px 15px',
    margin: "0 auto"
};

//K2's coordinates
const defaultMapCenter = {
    lat: 35.8799866,
    lng: 76.5048004
}

//Default zoom level, can be adjusted
const defaultMapZoom = 18

//Map options
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    // mapTypeId: 'map',
};

type Props = {
  address: string
}

type Location = {
  lat: number,
  lng: number
}

export default function MapLocation({ address }:Props) {

   const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
   setDefaults({
  key: "AIzaSyD1kAm8E7FWUCHQYfPZJXG-rQJVjwxwv7w", // Your API key here.
  language: "es", // Default language for responses.
  region: "es", // Default region for responses.
  });

  const geocodeAddress = async (address:string) => {
   const re = await fromAddress(address)
    const { lat, lng } = re.results[0].geometry.location;
    setLocation({lat,lng})
    }
    if (address) {
      geocodeAddress(address);
    }
  }, [address])

  return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={location || defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
          {location && <div><MarkerF title={"Peru Destino Seguro"} label={"Peru Destino Seguro"}   position={location} /> </div>}
            </GoogleMap>
        </div>
    )

}
