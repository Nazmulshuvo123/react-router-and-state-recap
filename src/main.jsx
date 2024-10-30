import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  {createBrowserRouter, RouterProvider} from"react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contract from './Component/Contract/Contract.jsx';
import Users from './Component/Users/Users.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';
import Posts from './Component/Posts/Posts.jsx';
import PostDetail from './Component/PostDetail/PostDetail.jsx';
import Albums from './Component/Albums/Albums.jsx';
import AlbumDetails from './Component/AlbumDetails/AlbumDetails.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contract',
        element:<Contract></Contract>
      },
      {
        path:'/users',
        loader: () =>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetail></PostDetail>
      },
      {
        path:'/albums',
        loader: () => fetch('https://jsonplaceholder.typicode.com/albums'),
        element:<Albums></Albums>
      },
      {
        path:'/album/:albumId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`),
        element:<AlbumDetails></AlbumDetails>
      }

    ]
  },
 
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
