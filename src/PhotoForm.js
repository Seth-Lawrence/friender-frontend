import { useState } from "react";

const BASE_API_URL = "http://localhost:5000";

/** renders form
 *
 * props: handleSubmit
 *
 * state: formData
 */

function PhotoForm() {
  const [fileData, setFileData] = useState();

  console.log("Photo Form, file:", fileData?.name);


  async function handleSubmit(evt) {
    debugger;
    evt.preventDefault();
    const formData = new FormData();
    formData.filepath = evt.target.fileUpload.files[0]
    // formData.object_name = fileData.name
    // formData.append('filepath', fileData);
    // formData.append('object_name', fileData.name);

    console.log('FORMDATA',formData)

    if(formData) {
      await fetch(`${BASE_API_URL}/api/photos`, {method: "POST",
        body: formData,
        headers: { 'content-type': 'multipart/form-data' }}
      );
    }
  }

  function handleChange(evt) {
    setFileData(evt.target.files[0]);
    console.log('FILEDATA',fileData)
    console.log('made it to handle change')
  }


  return(
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data" action="POST">
        <label htmlFor="fileUpload">
          Upload file:
          <input id="fileUpload" type="file" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>

  )

}

export default PhotoForm