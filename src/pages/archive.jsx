import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import Grid from "../components/Grid";
import "./archive.css";
import APIClient from "../services/api-client";
import { useOutletContext } from "react-router-dom";
import APIClientText from "../services/api-client1";
const apiClient = new APIClient("/getnews");
const apiClientText = new APIClientText("/getnews");
export default function Archive() {
  // const [setVisible] = useOutletContext();
  const [visible, setVisible] = useState(true);
  const [date, setDate] = useState(null);
  const [dateHttp, setDateHttp] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedMode, setSelectedMode] = useState({
    name: null,
    code: null,
  });
  const [data, setData] = useState(null);
  const media = [{ name: "BBC News", code: "BBC" }];
  const modes = [
    { name: "Headlines (Screenshot)", code: "screenShot" },
    { name: "Text Content", code: "text" },
  ];

  const handleSubmit = () => {
    apiClient
      .getAll({ date: dateHttp })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmitText = () => {
    apiClientText
      .getAll({ date: dateHttp })
      .then((response) => {
        //console.log(response);
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
          if (selectedMode.code == "screenShot") {
            handleSubmit();
          } else {
            handleSubmitText();
          }
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
    <div className="pt-7">
      <div className="p-10 flex justify-content-center">
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
              <div className="grid">
                <label
                  htmlFor="dateSelector"
                  className="font-semibold block mb-2 col-3"
                >
                  Please select date
                </label>
                <Calendar
                  id="dateSelector"
                  value={date}
                  onChange={(e) => print(e)}
                  dateFormat="yy-mm-dd"
                  className="col-9"
                />
              </div>
              <div className="grid">
                <label
                  htmlFor="dateSelector"
                  className="font-semibold block mb-2 col-3"
                >
                  Select Media
                </label>
                <div className=" col-9">
                  <Dropdown
                    value={selectedMedia}
                    onChange={(e) => setSelectedMedia(e.value)}
                    options={media}
                    optionLabel="name"
                    placeholder="Select Media Source"
                    className="w-full"
                    checkmark={true}
                    highlightOnSelect={false}
                  />
                </div>
              </div>
              <div className="grid">
                <label
                  htmlFor="dateSelector"
                  className="font-semibold block mb-2 col-3"
                >
                  select viewmode
                </label>
                <div className="col-9">
                  <Dropdown
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.value)}
                    options={modes}
                    optionLabel="name"
                    placeholder="Select mode"
                    className="w-full capitalize"
                    checkmark={true}
                    highlightOnSelect={false}
                  />
                </div>
              </div>
              <div className="font-semibold block mb-2 text-primary">
                We're currently archiving headlines exclusively from BBC News.
                However, we plan to include coverage from other media sources in
                the future
              </div>
            </div>
          </div>
        </Dialog>
        <div className="flex flex-column w-full bg-gray-100">
          <div className="flex justify-content-center align-items-center gap-4 p-3">
            <p className="font-semibold text-xl">
              Navigate through dates and see historical news headlines:
            </p>
            <Button
              label="navigate"
              icon="pi pi-external-link"
              onClick={() => setVisible(true)}
            />
          </div>
          {selectedMode.code == "screenShot" && data ? (
            <div className="">
              {data.map((item, index) => (
                <div className="" key={index}>
                  <div className="flex justify-content-between p-1 bg-primary border-round-md px-3">
                    <div className=""></div>
                    <p>{formatDateString(item.createdDate) + ":00"}</p>
                    <div className="flex justify-content-center align-items-center">
                      <i className="pi pi-angle-down"></i>
                    </div>
                  </div>
                  <div className="px-8 py-3">
                    <img src={item.url} alt="" className="w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            selectedMode.code === "text" && data && <Grid data={data} />
          )}
        </div>
      </div>
    </div>
  );
}
