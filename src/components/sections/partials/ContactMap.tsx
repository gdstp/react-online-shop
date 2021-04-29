import React from "react";
import GoogleMapReact from "google-map-react";

const DumbComponent: React.FC<{
  lat: number;
  lng: number;
  text: string;
}> = ({ text }) => <div>{text}</div>;

const ContactMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div className="mt-14" style={{ height: "506px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAHQvnnxR8Fnng5Mh4e5IGMwunfYHHtRV0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <DumbComponent lat={59.955413} lng={30.337844} text="My Location" />
      </GoogleMapReact>
    </div>
  );
};

export default ContactMap;
