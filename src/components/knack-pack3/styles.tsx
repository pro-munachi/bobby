import styled from "styled-components";

export const  Card  = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.06);
    transition: 0.3s;
    width: 23%;
    height: 100%;
    /* padding-bottom: 10px; */
    :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
  }
    img {
        width: 100%;
        height: 180px;
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
    }
    .icon_text {
        color: #E03170;
        font-size: 11px;
        background-color: rgba(224, 49, 112, 0.2);
        padding: 2px 9px;
        border-radius: 3px;
        margin-bottom: 4px;
    }
    .footer {
        text-align: left;
        padding-top: 20px;
    }
    h1 {
        display: inline;
        color: #191919
    }
    .p {
        font-size: 13px;
        color: rgba(25, 25, 25, 0.5);
        /* padding-left: 25px; */
        padding-right: 20px;
        display: inline;
    }
    .container {
    padding: 10px 5px;
  }
  `;