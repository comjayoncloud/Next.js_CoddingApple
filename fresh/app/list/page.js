export default function List() {
  let 상품 = ["tomato", "pasta", "coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a) => {
        return (
          <div className="food">
            <h4>{a}</h4>
          </div>
        );
      })}
    </div>
  );
}
