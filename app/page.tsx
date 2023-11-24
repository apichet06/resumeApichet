import React from 'react'
import { Accordion, AccordionHeader, AccordionItem, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import './globals.css'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
export default function Resume() {
  return (
    <>
      <h1></h1>
      <Container >
        <Row>
          <Col md={12} className='p-3'>
            <Card className='shadow'>
              <CardBody>
                <Row>
                  <Col md={12}>
                    <strong style={{ fontSize: "60px" }}>นายอภิเชษฐ์ สิงห์นาครอง</strong>
                    <h3>PROGRAMMER SUPERVISOR</h3>
                    <hr />
                  </Col>
                  <Col md={4}  >
                    <Card >
                      <CardBody>
                        <ul>
                          <li> <strong>ตำแหน่งที่สนใจ</strong>
                            <ul>
                              <li>โปรแกรมเมอร์</li>
                            </ul>
                          </li>
                        </ul>
                        <Accordion>
                          <AccordionItem eventKey="0">
                            <AccordionHeader><strong>ประวัติส่วนตัว</strong></AccordionHeader>
                            <AccordionBody>
                              <ul>
                                <li>วันเกิด : 12 มกราคม 2533</li>
                                <li>สัญชาติ : ไทย</li>
                                <li>สาสนา : พุทธ</li>
                                <li>ส่วนสูง : 168 เซนติเมตร</li>
                                <li>น้ำหนัก : 58 กิโลกรัม</li>
                              </ul>
                            </AccordionBody>
                          </AccordionItem>
                          <AccordionItem eventKey="1">
                            <AccordionHeader><strong>ติดต่อ</strong></AccordionHeader>
                            <AccordionBody>
                              <ul>
                                <li>ที่อยู่ : บ้านพรรณนิศา 61 ตำบล ต.ธนู อ.อุทัย จ.พระนครศรีอยุธยา 13000</li>
                                <li>อีเมล : Apichet1.1@hotmail.co.th</li>
                                <li>โทร. : 091-419-8805</li>
                              </ul>
                            </AccordionBody>
                          </AccordionItem>
                          <AccordionItem eventKey="2">
                            <AccordionHeader>Accordion Item #1</AccordionHeader>
                            <AccordionBody>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </AccordionBody>
                          </AccordionItem>
                        </Accordion>

                      </CardBody>
                    </Card>
                  </Col>
                  <Col md={8}>
                    <Card >
                      <CardBody>
                      </CardBody>
                    </Card></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container >
    </>
  )
}
