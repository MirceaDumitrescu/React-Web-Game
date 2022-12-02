import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import DataLayerComponent from './DataLayer'

const createStoreComponent = (Component: React.ElementType) => {
  // eslint-disable-next-line react/display-name
  return () => {
    return (
      <MemoryRouter>
        <DataLayerComponent>
          <Component />
        </DataLayerComponent>
      </MemoryRouter>
    )
  }
}

export default createStoreComponent
