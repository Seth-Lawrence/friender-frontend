

/** renders form
 *
 * props: handleSubmit
 *
 * state: none
 */
function PhotoForm() {

  function handleSubmit() {

  }




  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type="file" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>

  )

}

export default PhotoForm