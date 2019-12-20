import styled from "styled-components";

interface Props {
  textAllign: string;
}

export const Section = styled.div`
  font-style: normal;
  font-weight: normal;
  text-align: ${(props: Props) => props.textAllign};
  margin-top: 140px;
  margin-bottom: 50px;
    text-align: center;
    
    .bodyHead {
      font-size: 36px;
      /* padding: 0 0 1rem; */
      color: black;
    }

    .subhead {
      font-size: 21px;
      font-weight: normal;
      /* padding: 7px 0 0; */
    }
  
`;