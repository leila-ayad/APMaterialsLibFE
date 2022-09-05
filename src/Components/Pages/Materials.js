import { useState, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Material from "../MaterialCard";

const Materials = () => {
  const [materials, setMaterials] = useState();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const response = await axiosPrivate.get("/materials/");
        console.log(response.data);
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
        <div>
          <ul className="MaterialsContainer">
            {materials.map((material) => (
              <Material
                key={material.material_id}
                item={material.material_name}
                description={material.material_description}
                amount={material.material_unit}
                phone={material.phone_number}
                email={material.email}
                image={material.image_name}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p>No Materials to display</p>
      )}
    </article>
  );
};

export default Materials;
