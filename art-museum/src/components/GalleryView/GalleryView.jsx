import { useParams, Navigate } from "react-router-dom";

function GalleryView({ galleries }) {
    // const galleries = props;
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => (
        gallery.id === Number(galleryId)
    ))

    if(!gallery) {
        
    }

    // console.log('galleryId:', galleryId);
    // console.log('GalleryView props:', galleries);
    // console.log('gallery found:', gallery);
    return (
        <>
        <h1>Hello from GalleryView</h1>
        <h2>{gallery.name}</h2>
        </>
    );
}



export default GalleryView;