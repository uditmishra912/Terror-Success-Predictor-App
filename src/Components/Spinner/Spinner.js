import React from 'react';
import { Spinner , Button } from 'react-bootstrap';


const SpinnerM = () => {
    return(
        <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );

}

export default SpinnerM;