import React from "react";

import { collection, onSnapshot, addDoc } from "firebase/firestore";

import "./App.css";

import ItemsBox from "./components/items-box/items-box.component";
import CustomInput from "./components/custom-input/custom-input.component";
import CustomButton from "./components/custom-btn/custom-btn.component";

import { firestore } from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "",
      add: "",
      items: [],
    };
  }

  componentDidMount() {
    onSnapshot(collection(firestore, "todos"), (dbSnapshot) => {
      const fetchedItems = [];

      dbSnapshot.forEach((doc) => {
        fetchedItems.push({ ...doc.data(), id: doc.id });
      });

      this.setState({ items: fetchedItems });
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const collectionRef = collection(firestore, "todos");

    try {
      await addDoc(collectionRef, { name: this.state.add, done: false });

      this.setState({ add: "", search: "" });
    } catch (error) {
      console.log(error);
    }

    this.setState({ add: "", search: "" });
  };

  render() {
    const { items, search, add } = this.state;
    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()));

    console.log(filteredItems);

    return (
      <div className="container">
        <h1 className="main-title">React To-Do list</h1>
        <CustomInput type="search" name="search" onChange={this.handleChange} value={search} placeholder="Search" autocomplete="off" />
        <ItemsBox items={filteredItems} />
        <form className="add-form" onSubmit={this.handleSubmit}>
          <CustomInput type="text" name="add" required onChange={this.handleChange} value={add} placeholder="New item" autocomplete="off" />
          <CustomButton type="submit">Add</CustomButton>
        </form>
      </div>
    );
  }
}

export default App;
