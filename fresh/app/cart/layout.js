export default function Layout({ children }) {
  return (
    <div>
      <p>현대카드 무이자 이벤트중</p>
      {children} {/* page.js 들어가는 부분 */}
    </div>
  );
}
