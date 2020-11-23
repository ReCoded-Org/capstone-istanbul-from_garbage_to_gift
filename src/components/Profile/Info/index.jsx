import React, {useState, useEffect} from "react";
import { storage } from "../../../firebaseConfig"
import db from "../../../firebaseConfig";
import "./index.css";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";


export default function Info({ userInfo }) {
  
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [userImg, setUserImg] = useState();
  const { currentUser } = useAuth();
  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const res = await db.collection("userProfile").get();
        const data = res.docs.find((doc) => {
          console.log(doc.data());
          return doc.data().userId === currentUser.uid;
        });
        console.log(data);
        setUserImg(data ? data.data().imgUrl : url);
      };
      fetchData();
      console.log("fetched")
    }
  }, [currentUser, url]);

  if (!userInfo) {
    return <h2>loading...</h2>;
  } else {
    return (
      <div className="infoContainer">
        <img src={url} className="profileImg" alt="profile" />

        <form className="uploadImgSection"onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button>{t('profilePage.basicInfo.uploadBtn')}</button>
        </form>

        <div className="nameSurnameTxt">
          <h2 className="userNameTxt">{userInfo.name}</h2>
          <h2>{userInfo.surname}</h2>
        </div>
        <div className="userJobCity">
          <h2>{userInfo.job}</h2>
          <h2>{userInfo.location}</h2>
        </div>
      </div>
    );
  }
}

// import { storage } from "../../../firebaseConfig";

// const { t } = useTranslation();
// const [file, setFile] = useState(null);
// const [url, setURL] = useState("");
// const { currentUser } = useAuth();
// function handleChange(e) {
//   setFile(e.target.files[0]);
// }

// function handleUpload(e) {
//   e.preventDefault();
//   const uploadTask = storage.ref(`/images/${file.name}`).put(file);
//   uploadTask.on("state_changed", console.log, console.error, () => {
//     storage
//       .ref("images")
//       .child(file.name)
//       .getDownloadURL()
//       .then((url) => {
//         setFile(null);
//         setURL(url);
//       });
//   });
// }

/* <img src={url} className="profileImg" alt="profile" />
      <form className="uploadImgSection"onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
      <button>{t('profilePage.basicInfo.uploadBtn')}</button>
      </form>
      <h6>{data.name}</h6>
      <p>{data.description}</p> */
