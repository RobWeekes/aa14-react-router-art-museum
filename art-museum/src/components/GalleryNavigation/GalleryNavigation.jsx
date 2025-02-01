import { NavLink } from "react-router-dom";
import '../GalleryNavigation/GalleryNavigation.css';

function GalleryNavigation(props) {
  const { galleries } = props;
  console.log('galleries:', galleries);

  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to='/'>Home</NavLink>
      {galleries.map(gallery => (
        <NavLink
          to={`galleries/${gallery.id}`}
          key={gallery.id}
        >
          {gallery.name}
        </NavLink>
      ))}

    </nav>
  )
}


export default GalleryNavigation;
