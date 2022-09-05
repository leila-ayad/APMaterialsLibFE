import { useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

const useDialog = (activeMaterial) => {
  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState("");

  const axiosPrivate = useAxiosPrivate();
  const materialId = activeMaterial.material_id;

  const confirmDelete = () => {
    axiosPrivate.delete(`/materials/${materialId}`).then((resp) => {
      setMessage(resp.data.message);
    });
    setShowDialog(false);
  };

  const cancelDelete = () => {
    setShowDialog(false);
  };

  return { setShowDialog, showDialog, message, confirmDelete, cancelDelete, setMessage };
};

export default useDialog;
