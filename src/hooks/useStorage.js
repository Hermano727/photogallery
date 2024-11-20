import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { imageStorage, imageFirestore, serverTimestamp } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(imageStorage, file.name);
    const collectionRef = collection(imageFirestore, "images");

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const createdAt = serverTimestamp();
          await addDoc(collectionRef, { url: downloadURL, createdAt });
          setUrl(downloadURL);
        } catch (error) {
          setError(error);
        }
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
