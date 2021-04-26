import MenuBar from "components/sections/MenuBar";
import Subscribe from "components/sections/Subscribe";
import React from "react";
import Container from "./Container";
import Footer from "./Footer";

const PageContainer: React.FC = ({ children }) => {
  return (
    <>
      <MenuBar />
      <Container>{children}</Container>
      <Subscribe />
      <Footer />
    </>
  );
};

export default PageContainer;
