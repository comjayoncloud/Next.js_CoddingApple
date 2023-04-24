export default function abc() {
  const name = "abc";
  return (
    <div>
      <h3> {name} 페이지에요</h3>
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>상품1 $40</h4>
      </div>
      <div className="food">
        <h4>상품2 $40</h4>
      </div>
    </div>
  );
}
