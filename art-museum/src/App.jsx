import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView/GalleryView';
import ArtDescription from './components/ArtDescription';

// console.log('harvardArt:', harvardArt);

function Layout() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element:
          <>
            <h2>Harvard Art Museum</h2>
            <p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.</p>
          </>
      },
      {
        path: 'galleries/:galleryId',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <GalleryView galleries={harvardArt.records} />,
          },
          {
            path: 'art/:artId',
            element: <ArtDescription galleries={harvardArt.records} />
          }
        ]
      },
      {
        path: '*',
        element: <h2>Page Not Found</h2>
      }
    ]
  }
]);
  // { REPLACED IN PHASE 3 w LAYOUT
  //   path: 'galleries',
  //   element: <GalleryNavigation galleries={harvardArt.records} />
  // },
// ])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
// export Layout;
