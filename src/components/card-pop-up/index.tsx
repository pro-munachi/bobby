import * as React from "react";
// import { Link } from "react-router-dom";
import { Container } from "./styles";
import { ReactComponent as CloseButton } from "../../assets/icons/close.svg";
import { ReactComponent as ThickButton } from "../../assets/icons/tick.svg";
import { ReactComponent as QuestionButton } from "../../assets/icons/question.svg";
import { ReactComponent as LongArrowButton } from "../../assets/icons/longarrow.svg";

interface Props {
    closeModal: any;
  }


const PouUp: React.FC<Props> = ({ closeModal }) => {
  return (
  <Container>
    <span className="container">
    <div className="head">
        <h2 className="title">Most in-demand skills</h2>
        <span className="close" onClick={closeModal}> <CloseButton /> </span>
    </div>
    <div className="body">
        <div className="section description">
            <h2 className="sectionTitle tick"><ThickButton /> &nbsp;  Why is this pack useful?</h2>
            <div className="text">Some sub text explaining more about the skill. It should be about two lines long. Should be
                about. Some sub text explaining more about the skill. It should be about two lines long. Should be
                about. Some sub text explaining more about the skill. It should be about two lines long.</div>
        </div>
        <div className="section skills">
            <h2 className="sectionTitle question"><QuestionButton /> &nbsp; What skills are in this pack?</h2>

            <div className="skillslist">
                
            </div>

            <a className="button showmore">See More &nbsp; <img className="right" src="/assets/img/right.png" alt=""/></a>
        </div>

        <div className="section bottom">
                
            <a className="button">Use this skill pack &nbsp; <LongArrowButton /></a>
        </div>
    </div>
    </span>
  </Container>
  );
};

export default PouUp;
