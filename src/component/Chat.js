import React from "react";
import {
  FaWhatsapp,
  FaChartLine,
  FaPhoneSquare,
  FaUncharted,
} from "react-icons/fa";

export const Chat = () => {
  return (
    <div>
      <div class="position-relative">
        <div class=" fixed-bottom   top-300 ">
          <i style={{ fontSize: 50, cursor:'pointer', color: "#004D00", marginBottom:10, marginLeft:10 }}>
          <a style={{textDecoration:'none'}} href="https://api.whatsapp.com/send?phone=917351500899&text=Hello this is the starting message"><FaWhatsapp /></a>
            
          </i>
        </div>
      </div>
    </div>
  );
};
