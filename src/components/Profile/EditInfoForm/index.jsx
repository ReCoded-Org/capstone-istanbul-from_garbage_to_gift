import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import db from "../../../firebaseConfig";
import { useAuth } from "../../contexts/AuthContext";

export default function EditInfoForm({ userInfoForEdit }) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const { currentUser } = useAuth();
  const [name] = useState(userInfoForEdit.name);
  const [surname] = useState(userInfoForEdit.surname);
  const [job] = useState(userInfoForEdit.job);
  const [location] = useState(userInfoForEdit.location);
  const [biography] = useState(userInfoForEdit.biography);

  const [editForm, setEditForm] = useState({});

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e, key) => {
    setEditForm({
      ...editForm,
      [key]: e.target ? e.target.value : e,
    });
  };

  const editUserInfo = (e) => {
    db.collection("userProfile")
      .doc(currentUser.uid)
      .update({
        name: editForm.name,
        surname: editForm.surname,
        job: editForm.job,
        location: editForm.location,
        biography: editForm.biography,
        userId: currentUser.uid,
      })
      .then(alert("Success"))
      .catch(alert("Fail"));
    handleClose();
  };

  return (
    <div>
      <div className="editBtnContainer">
      <Button
        className="editProfileBtn"
        variant="primary"
        onClick={() => setShow(true)}
      >
        {t('profilePage.editForm.editProfile')}
      </Button>
      </div>
      <Modal show={show} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="purpleElemModal">{t('profilePage.editForm.modalTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="purpleElemSignUp">
            <Form.Group  id="userName">
              <Form.Label>{t("loginPages.signup.name")}</Form.Label>
              <Form.Control
                className="greenElemSignUp"
                type="text"
                defaultValue={name}
                onChange={(e) => handleChange(e, "name")}
                required
              />
            </Form.Group>
            <Form.Group id="userSurname">
              <Form.Label>{t("loginPages.signup.surname")}</Form.Label>
              <Form.Control
                className="greenElemSignUp"
                type="text"
                defaultValue={surname}
                onChange={(e) => handleChange(e, "surname")}
                required
              />
            </Form.Group>
            <Form.Group id="jobTitle">
              <Form.Label>{t("loginPages.signup.job")}</Form.Label>
              <Form.Control
                className="greenElemSignUp"
                type="text"
                defaultValue={job}
                onChange={(e) => handleChange(e, "job")}
                required
              />
            </Form.Group>
            <Form.Group id="location">
              <Form.Label>{t("loginPages.signup.location")}</Form.Label>
              <Form.Control
                className="greenElemSignUp"
                type="text"
                defaultValue={location}
                onChange={(e) => handleChange(e, "location")}
                required
              />
            </Form.Group>
            <Form.Group id="biography">
              <Form.Label>{t("loginPages.signup.biography")}</Form.Label>
              <Form.Control
                className="greenElemSignUp"
                as="textarea"
                id="biography"
                onChange={(e) => handleChange(e, "biography")}
                name="biography"
                cols="3"
                rows="5"
                maxLength="2000"
                defaultValue={biography}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          {t('profilePage.editForm.close')}
          </Button>
          <Button variant="primary" className="saveBtn" onClick={editUserInfo}>
            {t('profilePage.editForm.saveBtn')}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
