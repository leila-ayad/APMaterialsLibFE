import { useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

const useDialog = (id) => {
  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState("");

  const axiosPrivate = useAxiosPrivate();
  const materialId = id;

  const confirmDelete = (id) => {
    console.log("in api call", id);
    axiosPrivate.delete(`/materials/${materialId}`).then((resp) => {
      setMessage(resp.data.message);
      console.log(resp);
    });
    setShowDialog(false);
  };

  const cancelDelete = () => {
    setShowDialog(false);
  };

  return { setShowDialog, showDialog, message, confirmDelete, cancelDelete };
};

export default useDialog;
