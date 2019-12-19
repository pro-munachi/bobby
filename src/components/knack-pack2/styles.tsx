import styled from "styled-components";

export const  Card  = styled.div`
    width: 23%;
    cursor: pointer;
    .img {
        width: 100%;
        height: 300px;
}
.p {
  padding-top: 8px;
}
.text h4 {
  color: #8D8D8D;
  font-weight: normal;
  padding-top: 10px;
}
.card {
  position: relative;
  text-align: center;
  color: white;
}

.card .b_text {
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: rgba(25, 25, 25, 0.6);
  width: 100%;
}

.card .b_text .content1 {
  font-style: normal;
  font-size: 25px;
  line-height: 26px;
}

.card .b_text .content2 {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}
  `;