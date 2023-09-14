import React from "react";

function ItemListContainer(props) {
  const { className, text } = props;
  return (
    <div>
      <h1 className={className}>{text}</h1>
    </div>
  );
}
export default ItemListContainer;
