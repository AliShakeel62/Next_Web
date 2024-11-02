"use client";

import Image from "next/image";
import img from "@/app/assits/file.png";
import "@/app/{Components}/mainbord/main-board.module.css"; // Adjust the path if needed

export default function Mainboard() {
  return (
    <div
      className="main-div"
      style={{
        height: "450px",
        width: "100%",
        backgroundColor: "whitesmoke",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ marginLeft: 30, paddingTop: 30 }}>
        <h1
          style={{
            width: "40vw",
            height: "100%",
            backgroundColor: "whitesmoke",
            fontSize: "clamp(20px, 5vw, 40px)",
            fontWeight: 900,
            fontFamily: "raleway-v20-deprecated, sans-serif",
            fontStyle: "normal",
            whiteSpace: "nowrap",
          }}
        >
          FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
        </h1>
        <p
          style={{
            color: "black",
            width: "40vw",
            marginTop: "1vh",
            fontSize: "clamp(10px, 4vw, 3px)",
          }}
        >
          Browse through our diverse range of meticulously crafted garments
          designed to bring out individuality and cater to your sense of style
        </p>
        <button
          style={{
            backgroundColor: "black",
            marginTop: "20px",
            color: "white",
            borderRadius: 20,
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          Shop now
        </button>
      </div>
      <div>
        <Image src={img} alt="img" width={220} />
      </div>
    </div>
    
  );
}
