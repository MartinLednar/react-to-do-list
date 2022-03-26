import React from "react";

import Item from "../item/item.component";

import "./items-box.styles.scss";

const ItemsBox = ({ items }) => (
  <div className="items-box">{items.length === 0 ? <h1 className="empty-title">No items found!</h1> : items.map((item, i) => <Item key={item.id} itemContent={item} />)}</div>
);

export default ItemsBox;
