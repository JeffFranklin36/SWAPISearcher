import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../Components/styles/results.css'

const Pagination = ({ page, setPage, totalPages }) => {
 return(
   <Row className='justify-content-center'>
     <Col xs={12} md={4}>
     <button
      type="button"
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
      className="button w-50"
    >
     <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button
      type="button"
      disabled={page === totalPages}
      onClick={() => setPage(page + 1)}
      className="button w-50"
    >
     <FontAwesomeIcon icon={faChevronRight} />
     </button>
     </Col>
    </Row>
 )
}

export default Pagination;
