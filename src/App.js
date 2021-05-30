import React from "react";

export default function App() {
  const goods = [
    {
      name: "덩크",
      category: "신발",
      position: "신발장",
      price: 300000,
    },
    {
      name: "응티셔츠",
      category: "cloth",
      position: "box1",
      price: 60000,
    },
    {
      name: "똥싼바지",
      category: "바지",
      position: "box1",
      price: 30000,
    },
  ];

  return <div>{goods.map(GoodComponent)}</div>;
}

// prop에 goods array에 있는 하나의 element가 들어왔을때 => <div>덩크 - 신발 - 신발장 - 300000</div> => 이런 컴포넌트를 만들것이다
function GoodComponent(props) {
  return (
    <div>{`${props.name} - ${props.category} - ${props.position} - ${props.price}`}</div>
  );
}
