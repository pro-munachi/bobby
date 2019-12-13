import styled from "styled-components";

interface Props {
  img: string;
  height: string;
}

export const Container = styled.div`
  background-image: url(${(props: Props) => props.img});
  width: 100%;
  height: ${(props: Props) => props.height};
  /* .header { */
  width: 100%;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  color: white;
  -webkit-box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
          box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
/* } */
.header_text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  align-items: center;
}

.header__bold {
  font-size: 50px;
  line-height: 2px;
}

.header__small {
  font-weight: normal;
  font-size: 25px;
  line-height: 2.5rem;
}
`;
