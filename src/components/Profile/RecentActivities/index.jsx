import React from "react";
import "./index.css";
import ActivityCard from "./activityCard";
import kidsSchool from "../img/elementaryStudents.jpg";
import earthQuake from "../img/earthquake.jpg";
import { useTranslation } from "react-i18next";
export default function RecentActivities() {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="recentActivitiesContainer">
        <h2 className="recentActivitiesTitle">
          {t("profilePage.recentActivities")}
        </h2>
        {activitiyData.map((activity) => (
          <ActivityCard cardInfo={activity} />
        ))}
      </div>
    </div>
  );
}

const activitiyData = [
  {
    title: "Voluntarily knowledge share",
    description: "Gave programming lessons to elementary school students",
    date: "May 2019",
    imgUrl: kidsSchool,
  },
  {
    title: "Giving unused clothes",
    description:
      "Send his unused clothes and goods to help people in earthquake zone",
    date: "June 2020",
    imgUrl: earthQuake,
  },
];
