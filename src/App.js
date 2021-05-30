export default function App() {
  return (
    <div>
      <div>덩크 - 신발 - 신발장 - 300000</div>
      <div>응티셔츠 - cloth - box1 - 60000</div>
      <div>똥싼바지 - 바지 - box1 - 30000</div>
    </div>
  );
}

// prop에 goods array에 있는 하나의 element가 들어왔을때 => <div>덩크 - 신발 - 신발장 - 300000</div> => 이런 컴포넌트를 만들것이다
function GoodComponent(props) {
  return (
    <div>{`${props.name} - ${props.category} - ${props.position} - ${props.price}`}</div>
  );
}

const goods = [
  {
    name: "덩크",
    category: "신발",
    postion: "신발장",
    price: 300000,
  },
  {
    name: "응티셔츠",
    category: "cloth",
    postion: "box1",
    price: 60000,
  },
  {
    name: "똥싼바지",
    category: "바지",
    postion: "box1",
    price: 30000,
  },
];
