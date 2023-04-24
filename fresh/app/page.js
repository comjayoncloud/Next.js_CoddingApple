import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const name = "jaewoo";
  return (
    <div>
      <h4 className="title"> 애플프레쉬</h4>
      <p className="title-sub">ㅇㅇㅇ</p>
      {name}
    </div>
  );
}
