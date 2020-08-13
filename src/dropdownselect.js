import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownExampleMultipleSearchSelection = (props) => (
  <Dropdown
    placeholder
    multiple
    search
    selection
    onChange
    options
    {...props}
  />
)

export default DropdownExampleMultipleSearchSelection
