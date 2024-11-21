import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { imageFirestore } from '../firebase/config';

const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(collection(imageFirestore, collectionName), orderBy('createdAt', 'desc'));

        const unsub = onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });

        return () => unsub();
    }, [collectionName]);

    return { docs };
};

export default useFirestore;
