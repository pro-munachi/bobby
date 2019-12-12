import styled from "styled-components";

interface Props {
  img: string;
}

export const Container = styled.div`
  /* background-image: ${(props: Props) => props.img}; */
  position: relative;
  text-align: center;
  color: white;
  width: 200px;
  height: 100px;
  cursor: pointer;
  img {
    width: 200px;
    height: 100px;
    border-radius: 7px;
    background: rgba(0, 0, 0, .6);
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;
