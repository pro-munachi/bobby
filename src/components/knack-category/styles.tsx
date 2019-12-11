import styled from "styled-components";

interface Props {
  img: string;
}

export const Container = styled.div`
  background-image: ${(props: Props) => props.img};
`;
