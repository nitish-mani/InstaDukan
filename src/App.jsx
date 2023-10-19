import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Cart from "./components/cart";
import CollectUserData from "./components/CollectUserData";
import OrderPage from "./components/orderPage";

function App() {
  const [data] = useState([
    {
      image: "https://gonautika.com/assets/images/april23/nautika/to-pb.png",
      imgName: "Port Blair to Havelock",
    },
    {
      image: "https://gonautika.com/assets/images/april23/nautika/to-hl.png",
      imgName: "Havelock To Neil",
    },
    {
      image: "https://gonautika.com/assets/images/april23/nautika/to-nl.png",
      imgName: "Neil To Port Blair",
    },
    {
      image: "https://andaman.gonautika.com/wp-content/uploads/2023/03/2.jpg",
      imgName: "Move Around All Ports",
    },
  ]);
  const [price] = useState(1200);
  const [details, setDetails] = useState([]);
  const [cardNo, setCardNo] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header count={details.length} />,
      children: [
        {
          path: "/",
          element: <Home data={data} setCardNo={setCardNo} />,
        },
        {
          path: "/collectUserDetails",
          element: (
            <CollectUserData
              details={details}
              setDetails={setDetails}
              cardNo={cardNo}
            />
          ),
        },
        {
          path: "/cart",
          element: (
            <Cart
              details={details}
              setDetails={setDetails}
              cardNo={cardNo}
              price={price}
            />
          ),
        },
        {
          path: "/orderPage",
          element: <OrderPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
