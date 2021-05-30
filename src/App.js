import React, { useState, useEffect } from "react";
import { firestore } from "./firebase";

export default function App() {
  const [data, setData] = useState(goods);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [position, setPosition] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    firestore
      .collection("goods")
      .get()
      .then((querySnapshot) => {
        const myArr = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          myArr.push(doc.data());
        });
        setData(myArr);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  });

  function handleSubmit(e) {
    //upload name to server
    e.preventDefault();
    firestore
      .collection("goods")
      .add({
        name: name,
        category: category,
        position: position,
        price: price,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setName("");
        setCategory("");
        setPosition("");
        setPrice(0);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {data?.map(GoodComponent)}
    </div>
  );
}

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

// prop에 goods array에 있는 하나의 element가 들어왔을때 => <div>덩크 - 신발 - 신발장 - 300000</div> => 이런 컴포넌트를 만들것이다
function GoodComponent(props) {
  return (
    <div>{`${props.name} - ${props.category} - ${props.position} - ${props.price}`}</div>
  );
}
