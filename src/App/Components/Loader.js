import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loader(props) {

    const loading = props.loading;

  return (
    <div>
        {
            loading ?         <center>
            <Spinner animation="grow" variant="white"
            style={{
                fontSize: '2rem',
                width: '3rem',
                height: '3rem',
            }}
            />
        </center>
        : null
        }

    </div>
  )
}


