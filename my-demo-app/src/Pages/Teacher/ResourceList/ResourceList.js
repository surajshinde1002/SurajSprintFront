import { Link } from "react-router-dom";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import {  UrlResources } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";

import "./ResourceList.css";

export default function ResourceList() {
    const{ state } = useLocation();
  const { standard } = state;
  console.log("Value of standard in resourcelist : "+standard);
  // const { state } = useLocation();
  const navigate = useNavigate();
  const [Resources, setResources] = useState([]);


  const searchResources = () => {
    // const urlSpring = `${SPRING_URL}/student/viewIssuedBooks/${stud_id}`;
    const url = `${UrlResources}/api/Pdf/Pdf/Standard/${standard}`;
    console.log("url is : " + url);
    axios.post(url).then((response) => {
      const result = response.data;
      console.log("result is :"+result[0]);
      console.log(result);
     
      if (result !== null) {
        setResources(result);
        console.log("result dat a is"+result);
      } else {
        toast.error("Resources are empty");
      }
    }).catch(error=>{
      toast.error(`${error.response.data.error}`)
    });
  };

  const returnBook = (pdf_Name,std) => {
    
    if(std !== standard){
      console.log("Your are not authorized to delete in class :" +std);
        toast.error("Your are not authorized to modify the data in class : "+std);
      }else{
    const urlResource = `${UrlResources}/api/Pdf/productPdf/delete/${pdf_Name}`;
       console.log("pdf name is : " +pdf_Name);

    axios.delete(urlResource).then((response) => {
      const result = response.data;
      if (result["statusCode"] === 1) {
        toast.success("Resources deleted successfully!!");
        searchResources();
        // searchIssuedBooksBySpring();
      } else {
        toast.error(result["message"]);
      }
    }).catch(error => {
      toast.error(error.response.data.error);
    });
  }
  };
 

  
  useEffect(() => {
    searchResources();
    console.log("getting called");
  }, []);

  return (
    <div className="container" id="YBC">
      <h1 id="YBID">Your Resources</h1>
      <table class="table table-hover" id="reqTable">
        <thead>
          <tr className="YBTR">
            <th scope="col">Resource Name</th>
            <th scope="col">Resource Category</th>
            <th scope="col">Standard</th>
        </tr>
        </thead>
        <tbody>
          {Resources.map((Resource) => (
            <tr>
              <th scope="row">{Resource.pdfName}</th>
              <td id="ybs">{Resource.category}</td>
              <td id="ybs">{Resource.standard}</td>
              
              <td id="ybs">
                <button
                  className="btn btn-success btn-sm"
                  id="vbtn"
                  onClick={() => {
                    navigate("/pdfPage", {
                      state: { pdfName: Resource.pdfName },
                    });
                    console.log("pdfName in resourcelist is : "+Resource.pdfName);
                  }}
                >
                  VIEW
                </button>
                <button
                  className="btn btn-danger mr-5 btn-sm"
                  id="rbtn"
                  onClick={() => returnBook(Resource.pdfName,Resource.standard )}
                >
                  Delete
                </button>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
