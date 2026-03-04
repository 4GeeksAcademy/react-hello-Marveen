import React from "react";

function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3 text-center">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Hello, world!</h1>

        <p className="fs-4">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <hr className="my-4 w-50 mx-auto" />

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>

        <a className="btn btn-primary btn-lg mt-3" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;