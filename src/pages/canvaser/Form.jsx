import React from "react";

const Form = (props) => {
  return (
    <div>
      Ini form{" "}
      {props.add
        ? "add canvaser"
        : props.view
        ? "view canvaser"
        : props.edit
        ? "edit canvaser"
        : "tipe form tidak diketahui"}
    </div>
  );
};

export default Form;
