import React from "react";

function RandomImage(props) {
  const seed = Math.random() * 10;
  const image =
    "https://picsum.photos/seed/" + seed + "/" + (props.width || 230);
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        maxWidth: props.width || 230,
        height: props.height || 200
      }}
      className="previewImage"
    ></div>
  );
}

export default RandomImage;
