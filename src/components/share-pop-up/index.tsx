import * as React from "react";
// import { Link } from "react-router-dom";
import { Container } from "./styles";
import { ReactComponent as CloseButton } from "../../assets/icons/closeblack.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as WhatsApp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";

interface Props {
    closeModal: any;
  }


const PouUp: React.FC<Props> = ({ closeModal }) => {

  let [textToCopy, setTextToCopy] = React.useState("https://5dde7e41d98--knackapp-platform.netlify.com/");

  return (
  <Container>
    <div className="container">
      <h2 className="shares">Share</h2>
      <CloseButton style={{float: "right", cursor: "pointer"}} onClick={closeModal}/><br />
    <div className="img">
        <div>
            <a href="http://facebook.com" target="blank"> 
              <Facebook className="icons" />
            </a>
            <h4>FaceBook</h4>
        </div>
        <div>
            <a href="https://web.whatsapp.com/" target="blank">
              <WhatsApp className="icons" />
            </a>
            <h4>WhatsApp</h4>
        </div>
        <div>
            <a href="http://twitter.com" target="blank">
              <Twitter className="icons" />
            </a>
            <h4>Twitter</h4>
        </div>
        <div>
          <a href="http://twitter.com" target="blank">
            <Email className="icons" />
          </a>
            <h4>Email</h4>
        </div>
    </div>
    <div className="copy">
        <input type="text" value="https://5dde7e41d98--knackapp-platform.netlify.com/" />
        <button 
          value="copy"
          onClick={() => {navigator.clipboard.writeText(textToCopy)}}
          >
          Copy
        </button>
    </div>
    <hr />
</div>
  </Container>
  );
};

export default PouUp;
