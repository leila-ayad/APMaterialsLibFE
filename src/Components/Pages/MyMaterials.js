import { useState, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";
import Material from "../MaterialCard";
import Dialog from "../Dialog";
import useDialog from "../../Hooks/useDialog"

export default function MyMaterials() {
  const [myMaterials, setMyMaterials] = useState([]);
  const [materialId, setMaterialId] = useState(1)
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const { setShowDialog, showDialog, message, confirmDelete, cancelDelete } = useDialog(materialId)

  useEffect(() => {
    const getMyMaterials = async () => {
      const id = auth.memberId;
      try {
        const response = await axiosPrivate.get(
          `/materials/${id}/your-materials`
        );
        setMyMaterials(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getMyMaterials();
  }, [message, auth.memberId]);

const handleClick = (material) => {
    setMaterialId(material)
    setShowDialog(true)
}
 
  return (
    <article>
      <h2>Materials List</h2>
      {message ? <p>{message}</p> : <></>}
      {myMaterials?.length ? (
        <ul>
          {myMaterials.map((material) => (
            <li>
              <Material
                key={material.material_id}
                item={material.material_name}
                description={material.material_description}
                amount={material.material_unit}
                phone={material.phone_number}
                email={material.email}
              />
              <button>Update</button>
              <button onClick={() => handleClick(material.material_id)} >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Materials to display</p>
      )}
      <Dialog show={showDialog} cancel={cancelDelete} confirm={confirmDelete} />
    </article>
  );
}
