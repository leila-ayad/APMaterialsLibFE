import { useState, useEffect } from "react";
import axios from "../../api/axios";
import Material from "../Material";

const Materials = () => {
  const [materials, setMaterials] = useState();

  useEffect(() => {
    axios
      .get("/materials")
      .then((resp) => {
        setMaterials(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <article>
      <h2>Materials List</h2>
      {materials?.length ? (
        <ul>
          {materials.map((material) => (
            <Material
              key={material.material_id}
              item={material.material_name}
              description={material.material_description}
              amount={material.material_unit}
              phone={material.phone_number}
              email={material.email}
            />
          ))}
        </ul>
      ) : (
        <p>No materials to display</p>
      )}
    </article>
  );
};

export default Materials;
