import axios from 'axios';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { UrlResources } from '../../../config'
import './AddResource.css'


function TAddResource() {
    const [ResourceName, setResourceName] = useState("");
    const [ResourceCategory, setResourceCategory] = useState("");
    const [Standard, setStandard] = useState(1);
    const [PdfFile, setPdfFile] = useState("");

    
    const navigate = useNavigate()


    const addResource = () => {
      if (ResourceName.length === 0) {
        toast.warning('please enter resource name')
      } else if (ResourceCategory.length === 0) {
        toast.warning('Please enter resource category')
      } else if (Standard.length === 0) {
        toast.warning('Please enter standard')
      } else if (PdfFile.length === 0) {
        toast.warning('Please upload pdf file')
      } else {
        const data = new FormData()
        data.append('ResourceName', ResourceName)
        data.append('ResourceCategory', ResourceCategory)
        data.append('Standard', Standard)
        data.append('PdfFile', PdfFile)
        
        const url = `${UrlResources}/api/Pdf`
       
        axios.post(url, data).then((response) => {
          console.log('hello')
          const result = response.data
          console.log(result)
          console.log("Status code is : "+result['statusCode']);
          if(result['statusCode'] === 1) {
            toast.success('resource successfully added')

            navigate('/Resource-List', { state: { standard: Standard } })
          } else {
            toast.error("something went wrong!!!")
          }
        })
      }
    }

    
  return (
    <div className="container">
      <h1 className="title">Add Book In Library</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">

            <div className="mb-3">
              <label  className="label-control">
                Resource Name
              </label>
              <input
                onChange={(e) => {
                  setResourceName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label  className="label-control">
                Resource Category
              </label>
              <input
                onChange={(e) => {
                  setResourceCategory(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Standard 
              </label>
              <input
                onChange={(e) => {
                  setStandard(e.target.value);

                }}
                type="text"
                className="form-control"
              />
            </div>




            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Resource 
              </label>
              <input
                onChange={(e) => {
                  setPdfFile(e.target.files[0]);
                }}
                accept='pdf/*'
                type="file"
                className="form-control"
              />
            </div>

           
            <div className="mb-3">
              <button  onClick={addResource} className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default TAddResource;
