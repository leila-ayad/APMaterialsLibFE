import { useState, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";
import Material from "../MaterialCard";
import Dialog from "../Dialog";
import useDialog from "../../Hooks/useDialog";
import UpdateMaterial from "../UpdateMaterial";

export default function MyMaterials() {
  const [myMaterials, setMyMaterials] = useState([]);
  const [activeMaterial, setActiveMaterial] = useState({});
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const {
    setShowDialog,
    showDialog,
    message,
    setMessage,
    confirmDelete,
    cancelDelete,
  } = useDialog(activeMaterial);
  const [showUpdate, setShowUpdate] = useState(false);

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
  }, [myMaterials, auth.memberId]);

  const handleDeleteClick = (material) => {
    setActiveMaterial(material);
    setShowDialog(true);
  };

  const handleUpdateClick = (material) => {
    setActiveMaterial(material);
    setShowUpdate(true);
  };

  return (
    <article>
      <h2>Your Materials</h2>
      {message ? <p>{message}</p> : <></>}
      {myMaterials?.length ? (
        <ul className="MaterialsContainer">
          {myMaterials.map((material) => (
            <li className="MaterialContainer">
              <Material
                key={material.material_id}
                item={material.material_name}
                description={material.material_description}
                amount={material.material_unit}
                phone={material.phone_number}
                email={material.email}
                image={material.image_name}
              />
              <button onClick={() => handleUpdateClick(material)}>
                Update
              </button>
              <button onClick={() => handleDeleteClick(material)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          You have no materials to display. Add your materials by following the
          "New Materials" tab
        </p>
      )}
      <Dialog show={showDialog} cancel={cancelDelete} confirm={confirmDelete} />
      <UpdateMaterial
        material={activeMaterial}
        show={showUpdate}
        setShow={setShowUpdate}
        setMessage={setMessage}
      />
    </article>
  );
}
