import 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Components/Main/Main';
import Home from '../Components/Screens/Home/Home';


const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          // path: "/about",
          // element: <AboutUs />,
        },
        {
          // path: "/blog",
          // element: <Blog />,
        },
        {
          // path: "/contactus",
          // element: <ContactUs />,
        },
      ],
    },
  ]);

export default routers