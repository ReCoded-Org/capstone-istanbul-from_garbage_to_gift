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
  const [name, setName] = useState(userInfoForEdit.name);
  const [surname, setSurname] = useState(userInfoForEdit.surname);
  const [job, setJob] = useState(userInfoForEdit.job);
  const [location, setLocation] = useState(userInfoForEdit.location);
  const [biography, setBio] = useState(userInfoForEdit.biography);

  const [editForm, setEditForm] = useState({});

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

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
      <Button
        className="editProfileBtn"
        variant="primary"
        onClick={() => setShow(true)}
      >
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your profile information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="purpleElemSignUp inputSize" id="userName">
              <Form.Label>{t("loginPages.signup.name")}</Form.Label>
              <Form.Control
                className="purpleElemSignUp"
                type="text"
                defaultValue={name}
                onChange={(e) => handleChange(e, "name")}
                required
              />
            </Form.Group>
            <Form.Group id="userSurname">
              <Form.Label>{t("loginPages.signup.surname")}</Form.Label>
              <Form.Control
                className="purpleElemSignUp"
                type="text"
                defaultValue={surname}
                onChange={(e) => handleChange(e, "surname")}
                required
              />
            </Form.Group>
            <Form.Group id="jobTitle">
              <Form.Label>{t("loginPages.signup.job")}</Form.Label>
              <Form.Control
                className="purpleElemSignUp"
                type="text"
                defaultValue={job}
                onChange={(e) => handleChange(e, "job")}
                required
              />
            </Form.Group>
            <Form.Group id="location">
              <Form.Label>{t("loginPages.signup.location")}</Form.Label>
              <Form.Control
                className="purpleElemSignUp"
                type="text"
                defaultValue={location}
                onChange={(e) => handleChange(e, "location")}
                required
              />
            </Form.Group>
            <Form.Group id="biography">
              <label>{t("loginPages.signup.biography")}</label>
              <textarea
                id="biography"
                onChange={(e) => handleChange(e, "biography")}
                name="biography"
                cols="50"
                rows="3"
                maxLength="2000"
              >
                {biography}
              </textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editUserInfo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
