import { useState, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Material from "../MaterialCard";

const Materials = () => {
  const [materials, setMaterials] = useState();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const response = await axiosPrivate.get("/materials");
        setMaterials(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getMaterials();
  }, [axiosPrivate]);

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
