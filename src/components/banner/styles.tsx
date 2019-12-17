import styled from "styled-components";

interface Props {
  img: string;
}

export const Container = styled.div`
  background-image: url(${(props: Props) => props.img});
  width: 100%;
  height: 200px;
  border-radius: 10px;

  background-size: cover !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  /* ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 4;
      background: rgba(0, 0, 0, 5)
  } */
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    background: rgba(25, 25, 25, 0.3);
    border-radius: 10px;

    .textSide {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 1rem 5rem;
      width: 60%;
      font-style: normal;
      color: white;

      .title {
        font-weight: bold;
        font-size: 29px;
        line-height: 0px;
        padding:0 0 1rem 0;
        width: 100%;
        color: white;
      }

      .sub {
        width: 100%;
        font-weight: 500;
        font-size: 20px;
        line-height: 0px;
        color: white;
      }
    }

    .buttonSide {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        text-decoration: none;
        font-weight: 500;
        font-size: 18px;
        line-height: 0px;
        color: #E03170;

        padding: 15px 25px;
        background-color: white;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        ::after {
            content: url('/assets/icon/right.png');
            margin-left: 20px;
            height: 20px; 
        }
      }
    }
  }
`;
