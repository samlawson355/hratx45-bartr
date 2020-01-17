import React, { useState } from "react";
import { connect } from "react-redux";
import data from "../dummy_data/products";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCollapse,
  MDBCollapseHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBNavLink
} from "mdbreact";
//author -- Matt Lucas

const UserProfile = ({}) => {
  const userInfo = useSelector(store => store.userInfo);
  const products = useSelector(store => store.products);
  const location = useSelector(store => store.location);
  const [collapse2, setCollapse2] = useState(false);
  console.log(userInfo);
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="col-test"></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="col-test">
          <MDBCard>
            <MDBContainer className="col-test">
              <MDBRow>
                <MDBCol md="12" className="col-test">
                  <MDBCardImage
                    src="https://ca.slack-edge.com/T2SVC7RB3-ULBGPCN2Y-ba2e48877a9b-512"
                    className="img-fluid img-thumbnail rounded mx-auto d-block"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBCardTitle>Austin, TX</MDBCardTitle>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBCardText>Arohan Dutt</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBNavLink to="/trade">
                    <MDBBtn>Your Items</MDBBtn>
                  </MDBNavLink>
                </MDBCol>
                <MDBCol className="col-test">
                  <MDBNavLink to="/active-offers">
                    <MDBBtn>Active Offers</MDBBtn>
                  </MDBNavLink>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="text-center">
          <MDBNavLink to="/uploadItem">
            <MDBBtn>Upload an Item</MDBBtn>
          </MDBNavLink>
        </MDBCol>
      </MDBRow>
      <MDBContainer>
        <MDBCard>
          <MDBCollapseHeader
            onClick={() => setCollapse2(collapse2 === false ? true : false)}
            tag="h4"
          >
            Completed Barters
          </MDBCollapseHeader>
          <MDBCollapse id="collapse2" isOpen={collapse2}>
            <MDBCardBody>
              <div>
                You traded a paperclip for a house
                <hr />
                You traded a laptop for a used laptop
                <hr />
                You traded a pizza for a pineapple
              </div>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    location: state.location,
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps, {})(UserProfile);
