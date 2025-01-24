import { NavLink } from "react-router-dom";

function GalleryNavigation(props) {
  const { galleries } = props;
  // console.log('galleries:', galleries);

  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to='/'
        pending:
        active: 
      />
    </nav>
  )
}


export default GalleryNavigation;
