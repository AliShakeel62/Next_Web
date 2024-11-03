"use client";
import styles from "../../../style/main-board.module.css";

export default function Mainboard() {
  return (
    <div>
      <div>
        <h1 className="heading">
          FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
        </h1>
        <p>
          Browse through our diverse range of meticulously crafted garments
          designed to bring out individuality and cater to your sense of style
        </p>
        <button>Shop now</button>
        <h1 className={styles.heading}>Hello World!</h1>
      </div>
      <div></div>
    </div>
  );
}
