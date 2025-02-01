import { useParams, Link } from "react-router-dom";

function ArtDescription({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => (
        gallery.id === Number(galleryId)
    ))
    console.log(`art from ${gallery.name} Gallery`)
    return (
        <>
        <h2>Placeholder text</h2>
        <Link to='../..' relative="path">Back to {gallery.name} Gallery</Link>
        </>
    )
}

export default ArtDescription;