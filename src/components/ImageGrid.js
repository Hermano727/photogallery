import React from "react";
import useFirestore from "../hooks/useFirestore"

const ImageGrid = () => {
    const {docs} = useFirestore('images');
    console.log(docs);
    
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="image-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploaded picture" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;