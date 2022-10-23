/**
 * @fileoverview Contains app routes.
 * 
 * Route file meant to be imported to Main for routing purposes.
 * This file takes ./data/route.json as an input and from there
 * creates all links within the page.
 */

import { Route } from 'react-router-dom';
import React, { lazy } from 'react';

const AppRouter = (data: any) => {
  return(
    <>
      <Route path={ data.name } component={ data.route } exact/>
    </>
  );
};

function lazy_imports(data: {
  id: string,
  name: string,
  route: string,
  exact: string
}){
  return lazy(() => import(`${ data.route }`));
};

const final_route = (data: {
  id: string,
  name: string,
  route: string,
  exact: string
}) => {
  lazy_imports(data);
  AppRouter(data);
}

export default final_route;