import React from 'react';
import "./Footer.css";

const Footer = (props) => {
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{ padding: 0 }}>
                <div className="footerbar">
                    <h5>&copy; 2021 Victor Paturzo dCC React Library</h5>
                </div>
            </div>

        </div>
    )
}

export default Footer;