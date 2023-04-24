import Image from "next/image";
import img0 from "../../public/food0.png";
import img1 from "../../public/food1.png";
import img2 from "../../public/food2.png";

export default function List() {
  let 상품 = ["tomato", "pasta", "coconut"];
  //   console.log(이미지);
  const a = img0;
  const b = img1;
  const c = img2;
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            {/* <Image className="food-img" src={`이미지${i}`} alt="설명" /> */}

            <img className="food-img" src={c} alt="gg" />
            <h4>{a}</h4>
          </div>
        );
      })}
    </div>
  );
}
