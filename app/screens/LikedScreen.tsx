import React, { Component } from "react";
import { Layout, Text } from "@ui-kitten/components";
import { Image } from "react-native";

const likedMuseums = [
  {
    id: 1,
    name: "Museum of Modern Art",
    image:
      "https://media.istockphoto.com/photos/arizona-state-capitol-picture-id512548681?k=20&m=512548681&s=612x612&w=0&h=qqE4QTJXL1WKD-WWJ5qVPqy-ieRLCvj8W-4X8raiZpQ=",
    description:
      "The Museum of Modern Art, located in New York City, is the largest art museum in the United States. It is the third-largest in the world, after the National Gallery of Art and the Metropolitan Museum of Art.",
    address: "New York, NY 10012, USA",
    phone: "+1 212-929-5200",
    website: "https://www.moma.org/",
    rating: 4.5,
    ratingCount: "1,000",
    price: "$",
    distance: "0.5",
    duration: "1",
    category: "Museum",
    latitude: 40.779933,
    longitude: -73.977051,
  },
  {
    id: 1,
    name: "Museum of War Art",
    image:
      "https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/archives/size3/S06_BEEi173.jpg",
    description:
      "The Museum of Modern Art, located in New York City, is the largest art museum in the United States. It is the third-largest in the world, after the National Gallery of Art and the Metropolitan Museum of Art.",
    address: "New York, NY 10012, USA",
    phone: "+1 212-929-5200",
    website: "https://www.atlanta.org/",
    rating: 4.5,
    ratingCount: "1,000",
    price: "$",
    distance: "0.5",
    duration: "1",
    category: "Museum",
    latitude: 40.779933,
    longitude: -73.977051,
  },
];

const LikedScreen = () => {
  return (
    <Layout style={{ flex: 1 }}>
      {likedMuseums.map((museum, index) => (
        <Layout
          key={index}
          style={{
            margin: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 10,
            }}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: museum.image }}
            />
            <Layout
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }} key={index}>
                {museum.name}
              </Text>
              <Text style={{ fontWeight: "600", fontSize: 10 }} key={index}>
                {museum.address}
              </Text>
              <Text style={{ fontWeight: "500" }} key={index}>
                {museum.website}
              </Text>
            </Layout>
          </Layout>
        </Layout>
      ))}
    </Layout>
  );
};

export default LikedScreen;
