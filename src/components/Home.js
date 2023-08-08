import React from "react";
import SearchForm from "./SearchForm";
import TennisUserList from "./TennisUserList";
import { MapDisplay } from "./Map";
import { Container, Row, Col } from "react-bootstrap";

export const Home = ({
  onSearch,
  searchResult,
  matchFound,
  isAuthenticated,
}) => {
  console.log("isAuthenticated:", isAuthenticated);
  return (
    <Container fluid>
      <Row className="w-100">
        <h2>Search tennis players near you.</h2>
        <SearchForm onSearch={onSearch} searchResult={searchResult} />
      </Row>
      {matchFound && (
        <Row>
          <Col className="tennis-user-list-column">
            <div className="home-container"></div>
            <TennisUserList searchResult={searchResult} />
          </Col>
          <Col>
            <div className="map-container">
              <MapDisplay searchResult={searchResult}></MapDisplay>
            </div>
          </Col>
        </Row>
      )}
      {matchFound === false && (
        <Row>
          <Col>
            <p className="no-match-message">No Match Player Was Found!</p>
          </Col>
        </Row>
      )}
    </Container>
  );
  // return (
  //     <div className='home-container'>
  //         <h2>Search tennis players near you.</h2>
  //         <SearchForm onSearch={onSearch} searchResult={searchResult} />
  //         {matchFound ? (
  //             <TennisUserList searchResult={searchResult} />) : (
  //             <p className='no-match-message'>No Match Player Was Found!</p>
  //         )}

  //         {/* below code for showing google map */}
  //         {isAuthenticated && <MapDisplay searchResult={searchResult}></MapDisplay>}

  //     </div>
  // );
};
