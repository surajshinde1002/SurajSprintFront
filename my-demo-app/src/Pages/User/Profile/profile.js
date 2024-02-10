import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./profile.css";
import { URLUser, URLuser} from "../../../config";

const Profile = () => {
  const { User_id } = sessionStorage;

  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  const searchProfile = () => {
    const url = `${URLUser}/api/User/GetById/${User_id}`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log("The result is:"+result);
      if (result !== null) {
        setProfile(result);
        console.log(User_id);
      } else {
        toast.error(result["error"]);
      }
    }).catch(error => {
      toast.error(error.response.data.error)
    });
  };

//   const edit = () => {
//     navigate('/SEdit')
//   }

  useEffect(() => {
    searchProfile();
    console.log("getting called");
  }, []);

  return (
    <div className="container">
      <div className="profile">
      
          <table class="table-borderless">
            <tbody>
              <tr>
                <th scope="col" className="th">
                  STUDENT ID :
                </th>
                <td id="proId">{User_id}</td>
              </tr>
              <tr>
                <th scope="col">Username :</th>
                <td id="proId">{profile.username}</td>
              </tr>
              <tr>
                <th scope="col">Role :</th>
                <td id="proId">{profile.role}</td>
              </tr>
              <tr>
                <th scope="col">EMAIL :</th>
                <td id="proId">{profile.email}</td>
              </tr>
              <tr>
                <th scope="col">Standard :</th>
                <td id="proId">{profile.standard}</td>
              </tr>
              <tr>
                <th scope="col">Roll :</th>
                <td id="proId">{profile.roll}</td>
              </tr>
              <tr>
                <th scope="col">Date of Birth :</th>
                <td id="proId">{profile.dob}</td>
              </tr>
            </tbody>
          </table>
        
        {/* <button onClick={edit} type="submit" className="btn btn-primary btn-lg" id="pro">
          Edit
        </button> */}

        {/* <form id="profileCon">
          {profile.map((student) => (
            <div class="mb-1">
            <label for="exampleInputEmail1" className="form-label" id="pro">
              STUDENT ID : <div className="attribute">{stud_id}</div>
            </label>
            <label className="form-label" id="pro">FIRST NAME : <div className="attribute">{student.firstName}</div></label>
            <label for="exampleInputPassword1" className="form-label" id="pro">
              LAST NAME : <div className="attribute">{student.lastName}</div>
            </label>
            <label for="exampleInputPassword1" className="form-label" id="pro">
              MOBILE : <div className="attribute">{student.mobile}</div>
            </label>
            <label for="exampleInputPassword1" className="form-label" id="pro">
              EMAIL : <div className="attribute">{student.email}</div>
            </label>
          </div>
          ))}
          
          <button type="submit" className="btn btn-primary btn-lg" id="pro">
            Edit
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Profile;
