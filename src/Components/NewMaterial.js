import React from "react";

export default function NewMaterial(props) {
  return (
    <div>
      {/* I think I need to use Axios here to send the member_id with the req.body */}
      <form
        action="http://localhost:9000/api/materials/upload"
        enctype="multipart/form-data"
        method="POST"
      >
        <label for="material_name">
          Name of Material
          <input
            name="material_name"
            type="text"
            placeholder="Material name"
          ></input>
        </label>
        <label for="material_description">
          Describe the materials
          <input
            name="material_description"
            type="text"
            placeholder="Uses, quality, color, type, etc."
          ></input>
        </label>
        <label for="material_unit">
          Amount available
          <input
            name="material_unit"
            type="text"
            placeholder="Weight, length, height, etc."
          ></input>
        </label>
        {/* I want to have radio buttons to select call/text/dm (instagram)/email */}
        <label for="contact_method">
          Contact Method: Select all that apply
          <input
            name="contact_method"
            type="text"
            placeholder="Best method of contact"
          ></input>
        </label>
        <label for="pic">Upload a photo
          <input type="file" name="pic"/>
        </label>

        <input type="submit" value="Upload a file" />
      </form>
    </div>
  );
}
