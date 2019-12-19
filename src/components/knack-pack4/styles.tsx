import styled from "styled-components";

export const  Card  = styled.div`
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
    transition: 0.3s;
    width: 32%;
    height: 100%;
    /* :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  } */
    img {
        width: 100%;
        height: 250px;
        border-radius: 10px;
        cursor: pointer;
    }
    .icon {
        width: 12px;
        height: 12px;
        cursor: pointer;
    }
    .share {
        float: right;
        width: 17px;
        height: 17px;
        cursor: pointer;
        padding-right: 5px;
    }
    .icon_text {
        color: #E03170;
        font-size: 12px;
        font-weight: 1000;
        padding-bottom: 6px;
    }
    .footer {
        margin: 20px 0;
        display: inline;
    }
    h1 {
        display: inline;
        color: #191919
    }
    p {
        display: inline;
        font-size: 14px;
        padding-right: 90px;
        color: rgba(25, 25, 25, 0.5);
    }
    .container {
    padding: 10px 6px;
  }
  `;