import styled from "styled-components";


export const Container = styled.div`
  .head {
  position: fixed;
  left: 25.99%;
  top: 15%;
  height: 70px;
  width: 580px;
  background: url("/assets/img/skills.jpg");
  background-position: center ;
  background-size: cover ;
  background-repeat: no-repeat ;
  -webkit-box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
  border-radius: 6px 6px 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 20px;
  margin: 0;
}
.right {
  width:13px;
  height:13px;
}
.button {
  cursor: pointer;
}
.showmore {
  cursor: pointer;
}

.container .head .title {
  font-size: 26px;
  line-height: 40px;
  color: #fff;
}

.container .head .close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 15px;
}

.container .head .close::after {
  content: url("/assets/icons/close.svg");
}

.container .body .section {
  margin-top: 1.5rem;
  padding: 0 3rem;
}
.body {
  margin-top: 130px;
}

.container .body .section .sectionTitle {
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #191919;
}

.container .body .section .text {
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: rgba(25, 25, 25, 0.5);
  margin-left: 50px;
  width: 440px;
}

.container .body .section.skills .skillslist {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 1rem;
}

.container .body .section.skills .showmore {
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #E03170;
  padding: 10px 25px;
}

.container .body .section.bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  margin-bottom: 1.5rem;
}

.container .body .section.bottom .button {
  background: #E03170;
  color: #fff;
  font-weight: 500;
  padding: 10px 12px;
  border-radius: 5px;
  font-size: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
`;
