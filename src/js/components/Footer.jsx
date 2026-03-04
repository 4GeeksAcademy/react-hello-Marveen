import React from "react";


function Footer () {
    return (    <footer className="bg-light text-dark pt-4 pb-3 mt-5 shadow-lg">
        <div className="container">
            <div className="row align-items-center text-center text-md-start">

                <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-bold mb-1">
                        Desarrollo Web
                    </h5>
                    <small className="text-secondary">
                        Creando apps con React HTML5 & Bootstrap 5.3
                    </small>
                </div>


                <div className="col-md-6 text-md-end">
                    <span className="d-block fw-semibold">
                        © 2026 Marveen Riskwait
                    </span>
                    <span className="text-secondary">
                       
                        @4Geeks Academy
                    </span>
                </div>

            </div>

            <hr className="border-secondary my-3"/>

            <div className="text-center small text-secondary">
                Diseñado con 4Geeks Academy
            </div>
        </div>
    </footer>)
};


export default Footer;