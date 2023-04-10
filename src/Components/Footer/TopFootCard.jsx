import React from 'react'
import '../../CSS/TopFootCard.css'
export const TopFootCard = ({icon,heading,para}) => {
    return (
        <div className="footcard">
          <div className="footcard-container">
            <img className="footcard-img" src={icon} alt={heading} />
            <p className="footcard-heading">{heading}</p>
            <p className="footcard-para">{para}</p>
          </div>
        </div>
      );
    };
