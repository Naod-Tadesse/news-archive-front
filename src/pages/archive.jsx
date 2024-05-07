import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import "./archive.css";
import APIClient from "../services/api-client";
import { useOutletContext } from "react-router-dom";
const apiClient = new APIClient("/getnews");
export default function Archive() {
  // const [setVisible] = useOutletContext();
  const [visible, setVisible] = useState(true);
  const [date, setDate] = useState(null);
  const [dateHttp, setDateHttp] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [data, setData] = useState(null);
  const media = [{ name: "BBC News", code: "BBC" }];

  const handleSubmit = () => {
    apiClient
      .getAll({ date: dateHttp })
      .then((response) => {
        console.log(data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };
  const footerContent = (
    <div>
      <Button
        label="Submit"
        icon="pi pi-check"
        onClick={() => {
          setVisible(false);
          handleSubmit();
        }}
        autoFocus
      />
    </div>
  );

  function formatDateString(dateString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const parts = dateString.split("-").map((part) => parseInt(part));
    const date = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4]);
    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");

    return `${dayOfWeek} ${month} ${day} ${year} ${hour}:${minute}`;
  }

  const print = (e) => {
    console.log(e.value);
    let ddd = e.value.getDate();
    let mmm = parseInt(e.value.getMonth()) + 1;
    let yyy = e.value.getFullYear();
    const dateht = `${yyy}-${mmm}-${ddd}`;
    setDateHttp(dateht);
  };

  return (
    <div className="p-10 flex justify-content-center  h-screen">
      {/* <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      /> */}
      <Dialog
        header="Select date and media source  "
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <div>
          <div className="flex flex-column gap-5">
            <div className="flex align-items-center gap-3">
              <label htmlFor="dateSelector" className="font-bold block mb-2">
                Please select date
              </label>
              <Calendar
                id="dateSelector"
                value={date}
                onChange={(e) => print(e)}
                dateFormat="yy-mm-dd"
              />
            </div>
            <div className="flex align-items-center gap-3">
              <label htmlFor="dateSelector" className="font-bold block mb-2">
                Select Media
              </label>
              <Dropdown
                value={selectedMedia}
                onChange={(e) => setSelectedMedia(e.value)}
                options={media}
                optionLabel="name"
                placeholder="Select Media Source"
                className="w-full md:w-14rem"
                checkmark={true}
                highlightOnSelect={false}
              />
            </div>
            <div className="font-bold block mb-2 notice">
              We're currently archiving headlines exclusively from BBC News.
              However, we plan to include coverage from other media sources in
              the future
            </div>
          </div>
        </div>
      </Dialog>
      <div className="flex flex-column gap-3 align-items-center w-full">
        <div className="pt-5">
          <div className="flex align-items-center gap-4">
            <p className="font-bold text-xl">
              navigate through dates and see historical news headlines:
            </p>
            <Button
              label="navigate"
              icon="pi pi-external-link"
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
        {data ? (
          <div className="w-full">
            {data.map((item, index) => {
              return (
                <div className="w-full">
                  <div className="flex justify-content-center p-1 dateColor">
                    <p>{formatDateString(item.createdDate) + ":00"}</p>
                  </div>
                  <img src={item.url} alt="" key={index} className="w-full" />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
