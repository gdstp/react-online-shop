import styled from "styled-components";

export const Image = styled.div<{ url: string }>`
  width: 100%;
  height: 83%;
  background: url(${(props) => props.url});
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-size: 100%;
  }
`;
