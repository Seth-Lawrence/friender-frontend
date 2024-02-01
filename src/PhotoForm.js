import { useState } from "react";

const BASE_API_URL = "http://localhost:5000";

/** renders form
 *
 * props: handleSubmit
 *
 * state: formData
 */

function PhotoForm() {
  const [formData, setFormData] = useState();

  console.log("Photo Form, file:", formData?.name);

  async function handleSubmit(evt) {
    evt.preventDefault();
    if(formData) {
      await fetch(`${BASE_API_URL}/api/photos`, {method: "POST",
        form: ({
          "filepath": formData,
          "object_name": formData.name}),
        headers: { 'content-type': 'multipart/form-data' }}
      );
    }
  }

  function handleChange(evt) {
    setFormData(evt.target.files[0]);
  }



  return(
    <div>
      <form onSubmit={handleSubmit}>
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