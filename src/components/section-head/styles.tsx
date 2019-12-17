import styled from "styled-components";

interface Props {
  textAllign: string;
}

export const Section = styled.div`
  font-style: normal;
  font-weight: normal;
  text-align: ${(props: Props) => props.textAllign};
  margin-top: 100px;
  margin-bottom: 50px;

  .main {
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 9px;
    color: black;
  }

  .sub {
    font-size: 16px;
    line-height: 20px;
    color: #8D8D8D;
  }
`;