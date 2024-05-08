import { Card } from "primereact/card";
import { Button } from "primereact/button";
import andrew from "../assets/andrew.jpg";
import { useEffect } from "react";

export default function Grid({ data }) {
  useEffect(() => {
    console.log("received", data);
  });
  const footer = (
    <>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        severity="secondary"
        icon="pi pi-times"
        style={{ marginLeft: "0.5em" }}
      />
    </>
  );
  function formatDateString(dateString) {
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    // Remove the "Z" from the end of the date string
    const formattedDateString = dateString.replace("Z", "");

    // Create a new Date object from the formatted date string
    const date = new Date(formattedDateString);

    // Check if the date is invalid
    if (isNaN(date)) {
      return "Invalid Date";
    }

    // Format the date using toLocaleDateString() method
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="">
      <div className="grid justify-content-center">
        {data.map((item, index) => {
          const header = <img alt="Card" src={item.urlToImage} />;
          return (
            <div className="col-4" key={index}>
              <div className="p-3 border-round-sm font-bold">
                <a href={item.url} className="no-underline">
                  <Card
                    title={item.title}
                    //subTitle={item.description}
                    //   footer={footer}
                    header={header}
                    className=""
                  >
                    <p>{item.content}</p>
                    <div className="flex justify-content-between align-items-center">
                      <a href={item.url} className="no-underline">
                        read more
                      </a>
                      <p>{formatDateString(item.publishedAt)}</p>
                    </div>
                  </Card>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
