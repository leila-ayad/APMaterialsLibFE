import React from "react";

export default function NewMaterial(props) {
  return (
    <div>
      <form
        action="http://localhost:9000/api/materials/upload"
        enctype="multipart/form-data"
        method="POST"
      >
        <input type="file" name="pic" />
        <input type="submit" value="Upload a file" />
      </form>
    </div>
  );
}
