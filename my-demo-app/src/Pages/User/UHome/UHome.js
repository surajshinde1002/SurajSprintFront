import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL, SPRING_URL, URLUser, UrlResources } from '../../../config'
import './UHome.css'

const UHome = () => {
    const [book_id, setBook_Id] = useState('')
      const navigate = useNavigate()
      const { standard } = sessionStorage

      const [Resources, setResources] = useState([]);



     const searchResources = async() => {
        

          const urlResource = `${UrlResources}/api/Pdf/Pdf/Standard/${standard}`
            await axios.post(urlResource).then((response) => {
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
        
    }

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
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default UHome
  