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
  }, []);

  function handleSubmit(e) {
    //upload name to server
    e.preventDefault();
    const newData = {
      name: name,
      category: category,
      position: position,
      price: price,
    };
    firestore
      .collection("goods")
      .add(newData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setName("");
        setCategory("");
        setPosition("");
        setPrice(0);
        setData((prev) => [...prev, newData]);
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
    name: "??????",
    category: "??????",
    position: "?????????",
    price: 300000,
  },
  {
    name: "????????????",
    category: "cloth",
    position: "box1",
    price: 60000,
  },
  {
    name: "????????????",
    category: "??????",
    position: "box1",
    price: 30000,
  },
];

// prop??? goods array??? ?????? ????????? element??? ??????????????? => <div>?????? - ?????? - ????????? - 300000</div> => ?????? ??????????????? ???????????????
function GoodComponent(props) {
  return (
    <div>{`${props.name} - ${props.category} - ${props.position} - ${props.price}`}</div>
  );
}
