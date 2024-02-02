import { useState } from "react";
import './PhotoForm.css';

const BASE_API_URL = "http://localhost:5000";

/** renders form
 *
 * props: submitAction
 *
 * state: formData
 */

function PhotoForm({ submitAction }) {
  const [fileData, setFileData] = useState();

  console.log("Photo Form, file:", fileData?.name);


  async function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData();
    // formData.filepath = fileData
    // formData.object_name = fileData.name
    formData.append('filepath', fileData);
    // formData.append('object_name', fileData.name);

    console.log('FORMDATA',formData)

    if(formData) {
      await submitAction(formData);
    }
  }

  function handleChange(evt) {
    setFileData(evt.target.files[0]);
    console.log('FILEDATA',fileData)
    console.log('made it to handle change')
  }


  return(
      <form className='PhotoForm' onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="fileUpload">
          Upload file:
          <input id="fileUpload" type="file" onChange={handleChange} />
        </label>
        <br />
        <button className='PhotoForm-Btn' type="submit">Submit</button>
      </form>
  )

}

export default PhotoForm
