import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleStriped = ({headers, data}) => (
  <Table striped>
    <Table.Header>
      <Table.Row>
             {headers.map( (item, index) => (
                <React.Fragment>
                   <Table.HeaderCell  key={index}>{item}</Table.HeaderCell>
                </React.Fragment>))}
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {data.map( (item, index) => (
          <React.Fragment>
            <Table.Row>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.zone}</Table.Cell>
                <Table.Cell>{item.region}</Table.Cell>
            </Table.Row>
         </React.Fragment>))}
    </Table.Body>
  </Table>
)

export default TableExampleStriped
