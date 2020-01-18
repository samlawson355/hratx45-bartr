import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBBtn } from 'mdbreact';
import {
  Grid,
  Col,
  Row,
  Divider,
  Button
} from '../components/CustomComponents';
import PastOffer from './PastOffer';

const dummyData = [
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Completed',
    MessageThreadID: 1,
    Offerer: {
      id: 2,
      items: [
        {
          name: 'used hair',
          value: '2',
          image:
            'https://image.shutterstock.com/image-photo/scrap-hair-after-cutting-barber-260nw-1474957202.jpg'
        },
        {
          name: 'old bike',
          value: '7',
          image:
            'https://www.featurepics.com/StockImage/20081008/old-bike-stock-picture-924047.jpg'
        }
      ]
    },
    Offeree: {
      id: 1,
      items: [
        {
          name: 'McLaren 720S Spider',
          value: '720',
          image:
            'https://cars.mclaren.com/content/dam/mclaren-automotive/models/720s/720s-spider/overview/1920x1080/720s-Spider.jpg'
        }
      ]
    }
  },
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Completed',
    MessageThreadID: 2,
    Offerer: {
      id: 2,
      items: [
        {
          name: 'broken doll',
          value: '13',
          image:
            'https://images.fineartamerica.com/images-medium-large-5/broken-doll-katie-victoria-tolley.jpg'
        },
        {
          name: 'competitive hot dog eating mask',
          value: '18',
          image: 'https://pbs.twimg.com/media/Dl5rolBVAAA9cjM.jpg'
        },
        {
          name: 'the rest of this bag of cheetos',
          value: '5',
          image: 'https://i.redd.it/v11q4xffh4y11.jpg'
        }
      ]
    },
    Offeree: {
      id: 1,
      items: [
        {
          name: 'Trader Joes Scandinavian Swimmers',
          value: '10000',
          image:
            'https://www.traderjoes.com/TJ_CMS_Content/Images/Digin/Uploads/65556-super-sour-scandinavian-swimmers.jpg'
        }
      ]
    }
  },
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Completed',
    MessageThreadID: 3,
    Offerer: {
      id: 1,
      items: [
        {
          name: 'This friendly gesture',
          value: '0',
          image:
            'https://nationalpostcom.files.wordpress.com/2019/06/flip-2.png?w=780'
        }
      ]
    },
    Offeree: {
      id: 2,
      items: [
        {
          name: 'old bike',
          value: '7',
          image:
            'https://www.featurepics.com/StockImage/20081008/old-bike-stock-picture-924047.jpg'
        }
      ]
    }
  }
];

const PastOffersScreen = () => {
  const user = 2;
  const other = 1;
  const [open, setOpen] = useState('');
  const dispatch = useDispatch();
  return (
    <Grid fluid nopad id="active-offers-screen" className="pad-edge-top">
      <Row>
        <Col className="center font-double font-bold" mobile="12">
          Past Offers
        </Col>
      </Row>
      <Row>
        <Col className="center" mobile="12">
          <Grid>
            {dummyData
              .filter(offer => offer.Offerer.id === user)
              .map((o, i) => (
                <Row key={i} nopad className="pad-none">
                  <Col nopad className="pad-edge-bottom-half" mobile="12">
                    <Grid>
                      <MDBBtn
                        style={{ margin: '0' }}
                        className="pad-all-half fill font-large"
                        color="default"
                        onClick={() =>
                          setOpen(
                            open === `collapse_yours${i}`
                              ? ''
                              : `collapse_yours${i}`
                          )
                        }
                      >
                        {`${o.Offeree.items[0].name}`}
                      </MDBBtn>
                      <MDBCollapse
                        className="margin-none pad-edge-top fill"
                        id={`collapse_yours${i}`}
                        isOpen={open}
                      >
                        <Row key={i}>
                          <Col
                            className="pad-none center"
                            mobile="12"
                            tablet="6"
                          >
                            <Grid>
                              <Divider label="Their Items" />
                              {o.Offeree.items.map((item, i) => (
                                <Row>
                                  <Col nopad className="pad-edge-bottom">
                                    <PastOffer
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDel={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </Col>
                                </Row>
                              ))}
                            </Grid>
                          </Col>
                          <Col
                            className="pad-none center"
                            mobile="12"
                            tablet="6"
                          >
                            <Grid>
                              <Divider label="Your Items" />
                              {o.Offerer.items.map((item, i) => (
                                <Row>
                                  <Col
                                    mobile="12"
                                    nopad
                                    className="pad-edge-bottom"
                                  >
                                    <PastOffer
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDel={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </Col>
                                </Row>
                              ))}
                            </Grid>
                          </Col>
                        </Row>
                      </MDBCollapse>
                    </Grid>
                  </Col>
                </Row>
              ))}
          </Grid>
        </Col>
      </Row>

      <Row>
        <Col className="center font-plus font-bold" mobile="12">
          Offers You've Recieved
        </Col>
      </Row>

      <Row>
        <Col className="center" mobile="12">
          <Grid>
            {dummyData
              .filter(offer => offer.Offerer.id === other)
              .map((o, i) => (
                <Row key={i} nopad className="pad-none">
                  <Col nopad className="pad-edge-bottom-half" mobile="12">
                    <Grid>
                      <MDBBtn
                        style={{ margin: '0' }}
                        className="pad-all-half fill font-large"
                        color="default"
                        onClick={() =>
                          setOpen(
                            open === `collapse_theirs${i}`
                              ? ''
                              : `collapse_theirs${i}`
                          )
                        }
                      >
                        {`${o.Offeree.items[0].name}`}
                      </MDBBtn>
                      <MDBCollapse
                        className="margin-none pad-edge-top fill"
                        id={`collapse_theirs${i}`}
                        isOpen={open}
                      >
                        <Row key={i}>
                          <Col
                            className="pad-none center"
                            mobile="12"
                            tablet="6"
                          >
                            <Grid>
                              <Divider label="Their Items" />
                              {o.Offerer.items.map((item, i) => (
                                <Row>
                                  <Col nopad className="pad-edge-bottom">
                                    <PastOffer
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDel={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </Col>
                                </Row>
                              ))}
                            </Grid>
                          </Col>
                          <Col
                            className="pad-none center"
                            mobile="12"
                            tablet="6"
                          >
                            <Grid>
                              <Divider label="Your Items" />
                              {o.Offeree.items.map((item, i) => (
                                <Row>
                                  <Col
                                    mobile="12"
                                    nopad
                                    className="pad-edge-bottom"
                                  >
                                    <PastOffer
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDel={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </Col>
                                </Row>
                              ))}
                            </Grid>
                          </Col>
                        </Row>
                      </MDBCollapse>
                    </Grid>
                  </Col>
                </Row>
              ))}
          </Grid>
        </Col>
      </Row>
    </Grid>
  );
};
export default PastOffersScreen;
