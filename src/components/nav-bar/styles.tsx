import styled from "styled-components";


export const Container = styled.div`
  .header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 23px;
  padding-bottom: 23px;
  margin-left: 70px;
  margin-right: 70px;
}

.header__logo {
  padding: 0.7rem 25px;
}

.header__logo a {
  text-decoration: none;
}

.header__logo a .logo {
  -ms-flex-item-align: start;
      align-self: flex-start;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
}

.header__navs {
  padding: 10px 25px;
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

.header__navs .menu {
  list-style-type: none;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.header__navs .menu li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  cursor: pointer;
}

.header__navs .menu li:hover span {
  position: absolute;
  width: 27px;
  border-bottom: 1.5px solid #fff;
  padding-bottom: 2rem;
  z-index: 0;
}

.header__navs .menu li.dropdown a {
  padding-right: 11px;
}

.header__navs .menu li.dropdown::after {
  content: url("/assets/icons/arrow.png");
}

.header__navs .menu li a {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  padding: 0.4rem;
  text-decoration: none;
  z-index: 1;
}

.header__navs .menu li a.bold {
  font-weight: bold;
}

.header__navs .menu li a.button.outline {
  padding: 11px 37px !important;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 5px;
}

.header__navs .menu li a.active ~ span {
  position: absolute;
  width: 27px;
  border-bottom: 1.5px solid #fff;
  padding-bottom: 2rem;
  z-index: 0;
}
`;
