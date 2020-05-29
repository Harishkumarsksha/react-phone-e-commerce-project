import React, { Fragment } from "react";

function Title({ name, title }) {
  return (
    <Fragment>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1 className="text-capitalize text-transform-bold">
            {name} <strong className="text-blue">{title}</strong>
          </h1>
        </div>
      </div>
    </Fragment>
  );
}

export default Title;
