import age from "./data";

export default function Cart() {
  const age = age;
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
