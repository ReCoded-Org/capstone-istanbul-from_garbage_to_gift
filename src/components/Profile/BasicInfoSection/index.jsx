import React, { useState } from "react";
import { storage } from "../../../firebaseConfig";
import { useTranslation } from "react-i18next";

export default function BasicInfo({ data }) {
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

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

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
      <button>{t('profilePage.basicInfo.uploadBtn')}</button>
      </form>
      <img src={url} alt="profile" />
      <h5>{data.imageUrl}</h5>
      <h6>{data.name}</h6>
      <p>{data.description}</p>
    </div>
  );
}
