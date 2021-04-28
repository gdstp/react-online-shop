import MenuBar from "components/sections/MenuBar";
import React from "react";
import Container from "./Container";
import Footer from "./Footer";

const PageContainer: React.FC = ({ children }) => {
  return (
    <>
      <MenuBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default PageContainer;
