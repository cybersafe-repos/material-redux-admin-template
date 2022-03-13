import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTER_ROUTES } from './constants'
import AppContainer from '../features/App'
import Home from '../features/Home'
import Reports from '../features/Reports'
import NotFound from '../features/NotFound'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route PATH={ROUTER_ROUTES.INDEX} element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path={ROUTER_ROUTES.HOME} element={<Home />} />
          <Route path={ROUTER_ROUTES.REPORTS} element={<Reports />} />
        </Route>
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
