import { useParams, Link } from "react-router-dom";

function ArtDescription({ galleries }) {
    const { galleryId, artId } = useParams();
    console.log('galleryId:', galleryId);
    console.log('artId:', artId);
    const gallery = galleries.find(gallery => (
        gallery.id === Number(galleryId)
    ))
    console.log(`art from ${gallery.name} Gallery`)
    console.log('art in gallery:', gallery.objects);
    const artPiece = gallery.objects.find(artwork =>
      artwork.id === Number(artId)
    )
    console.log('artwork title:', artPiece.title);

    return (
      <>
        <h3><Link to={artPiece.url}>{artPiece.title}</Link></h3>
        <div className='description'>{artPiece.description}</div>
        <div className='technique'>{artPiece.technique}</div>
        <div className='credit'>{artPiece.creditline}</div>
        <Link to='../..' relative="path">Back to {gallery.name} Gallery</Link>
      </>
    )
}

export default ArtDescription;
