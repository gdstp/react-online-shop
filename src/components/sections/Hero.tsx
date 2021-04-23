import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import HeroItem from "./partials/HeroItem";
import SlideShowBar from "../ui/SlideShowBar";
import Eletronics from "../../assets/imgs/eletronics-hero.png";
import Group from "../../assets/imgs/group-hero.png";
import Jewels from "../../assets/imgs/jewels-hero.png";

const Hero: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const HeroArr = [
    {
      title: "New collection",
      button: "Shop Now",
      image: Jewels,
    },
    {
      title: "Latest Technologies",
      button: "Shop Now",
      image: Eletronics,
    },
    {
      title: "For everyone",
      button: "Shop Now",
      image: Group,
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (selectedItem >= 2) {
        return setSelectedItem(0);
      }
      setSelectedItem(selectedItem + 1);
    }, 5000);
  }, [selectedItem]);

  return (
    <Container>
      <div className="h-hero flex flex-col">
        <div className="bg-gray-200 h-5/6">
          {HeroArr.map((item, index) => (
            <HeroItem
              key={item.title}
              show={index === selectedItem}
              title={item.title}
              button={item.button}
              image={item.image}
            />
          ))}
        </div>
        <div className="w-54 flex items-center justify-between mx-auto mt-4">
          <SlideShowBar
            onClick={() => setSelectedItem(0)}
            selectedItem={selectedItem === 0}
          />
          <SlideShowBar
            onClick={() => setSelectedItem(1)}
            selectedItem={selectedItem === 1}
          />
          <SlideShowBar
            onClick={() => setSelectedItem(2)}
            selectedItem={selectedItem === 2}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;

/**
 * {
 * "id":1,
 * "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
 * "price":109.95,
 * "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
 * "category":"men's clothing",
 * "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
 */
