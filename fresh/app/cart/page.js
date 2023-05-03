// import age from "./data";
import Hello from "./hello";
export default function Cart() {
  let m = ["TOMATO", "PASTA"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={m[0]} />
      <CartItem item={m[1]} />
      <Hello />
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
      <RedButton color="red" />
      <RedButton color="blue" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function RedButton(props) {
  return <button style={{ background: props.color }}>버튼</button>;
}
