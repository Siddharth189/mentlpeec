import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const Link = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Useful Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://www.mhmindia.org/test/stress"
                target="_blank"
              >
                Stress Test
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://www.mhmindia.org/test/stress"
                target="_blank"
              >
                Happiness Test
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://www.mhmindia.org/test/health"
                target="_blank"
              >
                Know your health level
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Link
