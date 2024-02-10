import { Link } from "react-router-dom";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { URL, SPRING_URL } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import "./ClassesCard.css";

export default function ClassCard() {
  
  // const { state } = useLocation();
  

  const navigate = useNavigate();

  
  const handleButtonClick = (value) => {
    // Update the state with the selected class
    console.log("State value from card : "+value);
    navigate('/Resource-List', { state: { standard: value } }); // Navigate to the next page with the state
  };

  

  return (
    <div className="container" id="YBC">
      <h1 id="YBID">Classes</h1>
      <table class="table table-hover" id="reqTable">
       
        <tbody>
        {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <td>Class {index + 1}</td>
              <td>
                <button onClick={() => handleButtonClick(index + 1)}>Resources</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
