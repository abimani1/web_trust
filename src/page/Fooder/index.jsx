import React from 'react'
import '../Fooder/Style.css'

const Fooder = () => {
  return (
    <div className="fooder-box">
        <div className="fooder-box-1">
            <div className="fooder-box-1-1">
                <p>We are</p>
            </div>
            <div className="fooder-box-1-2">
                <div className="fooder-address">
                    <p>Trust International B.V. was founded in 1983 and is globally active with 4 brands: Trust, Trust Gaming, Trust Mobile and Trust Smart Home.</p>
                </div>
            </div>
        </div>
        <div className="fooder-box-2">
            <div className="fooder-box-2-1">
                <p>About us</p>
            </div>
            <div className="fooder-link">
                <ul>
                    <li>About Trust</li>
                    <li>Sustainability</li>
                    <li>Newsroom</li>
                    <li>Career Opportunities</li>
                    <li>Sitemap</li>
                    <li>Privacy Statement</li>
                    <li>Terms of use</li>
                    <li>Cookie information</li>
                </ul>
            </div>
        </div>
        <div className="fooder-box-3">
            <div className="fooder-box-3-1">
                <p>How can we help you?</p>
            </div>
            <div className="fooder-link">
                <ul>
                    <li>Support</li>
                    <li>Media</li>
                    <li>Contact</li>
                    <li>Dowload</li>
                    <li>Spare parts</li>
                    <li>Laptop Charger advisor</li>
                    <li>Warranty Condtions</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Fooder