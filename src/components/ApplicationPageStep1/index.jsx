
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandHolding,
// faHandHoldingHeart,
// } from "@fortawesome/free-solid-svg-icons";
// import Steps from "../Steps"
export default function PostSectionStep1(props) { 
    

// const [meet, setMeet] = useState(false);

const { t } = useTranslation();
  return (
    <Container className="00">
      {/* <div className="steps">
      <div className={meet && "stepOne"}>
      <FontAwesomeIcon icon={faHandHolding} size="2x" />
      <h2>{t("applicationPageStep1.Step1")}</h2>
      </div>
      <hr/>
      <div>
      <FontAwesomeIcon  icon={faHandHoldingHeart} size="2x" />
      <h2>{t("applicationPageStep1.Step2")}</h2>
      </div>
      </div> */}
 
      <div>
      <h2 className="123">Prerequisites</h2>
        {props.prerequisites && props.prerequisites.map(prerequisity => <p className="postDescription">{prerequisity}</p>)}
        <input
              type="checkbox"
              name="radiobutton"
              value={!props.meet}
              onChange={props.handleMeetSteps}
            />
            <label htmlFor="radiobutton">I meet these prerequisities</label>
            {props.meet && <Button className="navButtons" onClick={props.handleSteps}>{t("applicationPageStep1.Next")}</Button>}
      </div>
    </Container>
  );

}
  