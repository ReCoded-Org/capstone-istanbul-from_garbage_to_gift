// import React from 'react'
// import React, { useEffect, useState } from "react";
// import { Row, Col } from "react-bootstrap";

// import db from "../../firebaseConfig";
// import { useAuth } from "../../components/contexts/AuthContext";
// import { Modal, Button, Form } from "react-bootstrap";
// import React, { useState } from "react";

// export default function edit() {

//         const [events, setEvents] = useState([]);
//         const { currentUser } = useAuth();

//         const handleClose = () => {
//             setShow(false);
//           };

//           const handleShow = () => setShow(true);

//           const handleChange = (e, key) => {
//             setEditForm({
//               ...editForm,
//               [key]: e.target ? e.target.value : e,
//             });
//           };

//         const fetchData = async() => {
//             const res = await db.collection("userProfile").doc(currentUser.uid).get();
//             // const data = res.data();
//             await db.collection("userProfile").onSnapshot((snapshot) => {
//                 snapshot.docChanges().forEach((change) => {
//                     if (change.type === "added") {
//                         console.log(change.doc.data());
//                         console.log(change.doc.id);
//                         setEvents((prevState) => [
//                             ...prevState,
//                             {...change.doc.data(), id: change.doc.id },
//                         ]);
//                     } else if (change.type === "removed") {
//                         setEvents((prevState) => {
//                             const stateCopy = [...prevState];
//                             const filteredArray = stateCopy.filter(
//                                 (event) => event.id !== change.doc.id
//                             );
//                             return filteredArray;
//                         });
//                     } else if (change.type === "modified") {
//                         console.log(change.doc.data());
//                         setEvents((prevState) => {
//                             const stateCopy = [...prevState];
//                             const filteredArray = stateCopy.map((event) => {
//                                 if (event.id === change.doc.id) {
//                                     return {...change.doc.data(), id: change.doc.id }
//                                 } else {
//                                     return event
//                                 }
//                             });
//                             console.log(filteredArray);
//                             return filteredArray;
//                         });
//                         // setEvents([...change.doc.data(), id: change.doc.id ]),
//                     }
//                 });
//             });
//         }
//         console.log(events);
//         useEffect(() => {
//             fetchData();
//         }, []);

//         const [isDisplayForm, setIsDisplayForm] = useState(false)

//         const editEvent = () => {
//           setIsDisplayForm(true)
//           };

//     return (
//         <div>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit your profile information</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="purpleElemSignUp inputSize" id="userName">
//               <Form.Label>{t("loginPages.signup.name")}</Form.Label>
//               <Form.Control
//                 className="purpleElemSignUp"
//                 type="text"
//                 defaultValue={name}
//                 onChange={(e) => handleChange(e, "name")}
//                 required
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={editEvent}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//     )
// }
