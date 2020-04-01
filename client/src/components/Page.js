import React, { useState } from "react";
import RouteMap from "./Map/Map.js";
import { useData } from "../context/localStorage";
import AllPosts from "./Form/AllPosts";
import FormModal from "./Form/FormModal";
import AutoComplete from "./Form/AutoComplete";

export default function Page() {
  const { route, routes, myPosts, setRoute } = useData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="app p-6 z-10">
        <h1 className="text-3xl pb-4 text-center">BusApp</h1>
        <h2>Feedback about whom?</h2>
        <AutoComplete handleChange={setRoute} suggestions={routes} />
        <FormModal
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
        <AllPosts
          posts={myPosts}
          route={route}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      </div>
      <div className="app p-6">
        {!show && <RouteMap allRoutes={routes} route={route} />}
      </div>
    </div>
  );
}
