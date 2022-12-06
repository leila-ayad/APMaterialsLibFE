import { useState, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";
import Material from "../MaterialCard";
import Dialog from "../Dialog";
import useDialog from "../../Hooks/useDialog";
import UpdateMaterial from "../UpdateMaterial";
import { Link } from "react-router-dom"

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
  }, [activeMaterial, auth.memberId, axiosPrivate]);


  
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
      <p>Update, edit and delete materials you have listed here.</p>
      {myMaterials?.length ? (
        <ul className="MaterialsContainer">
          {myMaterials.map((material) => (
            <li className="MaterialContainer" key={material.material_id}>
              <Material className="MyMaterialContainer"
                item={material.material_name}
                description={material.material_description}
                amount={material.material_unit}
                phone={material.phone_number}
                email={material.email}
                image={material.image_name}
              />
              <div className="ButtonContainer">
                <button className="Button" onClick={() => handleUpdateClick(material)}>
                  Update
                </button>
                <button  className="Button" onClick={() => handleDeleteClick(material)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          You have no materials to display. Add materials to the database <Link to="/newmaterial">here</Link>.
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
