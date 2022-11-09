import { useState, useContext, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Material from "../MaterialCard";
import useMessage from "../../Hooks/useMessage";
import AuthContext from '../../Contexts/AuthProvider'

const Materials = () => {
  const [materials, setMaterials] = useState();
  const axiosPrivate = useAxiosPrivate();
  const { message, setMessage } = useMessage();
  const user = useContext(AuthContext)

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const response = await axiosPrivate.get("/materials/");
        setMaterials(response.data);
      } catch (err) {
        setMessage(err);
        console.log(err)
      }
    };
    getMaterials();
  }, [materials, axiosPrivate]);

  return (
    <article>
      <h1>Welcome {user.auth.username}</h1>

      <p>{message}</p>
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
        <p>Retrieving materials...</p>
      )}
    </article>
  );
};

export default Materials;
