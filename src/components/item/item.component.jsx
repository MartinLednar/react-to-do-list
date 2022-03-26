import React from "react";

import CustomButton from "../custom-btn/custom-btn.component";

import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

import { firestore } from "../firebase/firebase.utils";

import "./item.styles.scss";

class Item extends React.Component {
  handleChange = () => {
    const docRef = doc(firestore, "todos", this.props.itemContent.id);

    getDoc(docRef).then(async (dbSnapshot) => {
      const { done } = dbSnapshot.data();

      await updateDoc(docRef, { done: !done });
    });
  };

  handleDelete = () => {
    const docRef = doc(firestore, "todos", this.props.itemContent.id);

    deleteDoc(docRef);
  };

  render() {
    const { name, done } = this.props.itemContent;

    return (
      <div className="item">
        <p className={`${done ? "item-done" : ""} item-text`}>{name}</p>
        <p className="item-icon">{done ? "✅" : "❌"}</p>
        <CustomButton onClick={this.handleChange}>{done ? "Undone" : "Done"}</CustomButton>
        <CustomButton deleteBtn onClick={this.handleDelete}>
          Delete
        </CustomButton>
      </div>
    );
  }
}

export default Item;
