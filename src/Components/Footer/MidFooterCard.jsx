import React from 'react'
import '../../CSS/MidFooterCard.css'

export const MidFooterCard = ({heading,links}) => {
    return (
        <div className="content-card">
          <div className="content-card-container">
            <p className="content-card-heading">{heading}</p>
            <ul className="content-card-ul">
              {links.map((link, i) => {
                return (
                  <li className="content-card-li" key={i}>
                    <a href="/#" className="content-card-a">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    };