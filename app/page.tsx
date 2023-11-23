import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import './globals.css'
export default function Resume() {
  return (
    <>
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
                            <p>โปรแกรมเมอร์</p>
                          </li>
                          <li><strong>ติดต่อ</strong>
                            <p>
                              ที่อยู่ : บ้านพรรณนิศา 61 ตำบล ต.ธนู อ.อุทัย จ.พระนครศรีอยุธยา 13000 <br />
                              อีเมล : Apichet1.1@hotmail.co.th <br />
                              โทร. : 091-419-8805  <br />
                            </p>
                          </li>
                          <li><strong>ประวัติส่วนตัว</strong>
                            <p>
                              วันเกิด : 12 มกราคม 2533 <br />
                              สัญชาติ : ไทย <br />
                              สาสนา : พุทธ <br />
                              ส่วนสูง : 168 เซนติเมตร <br />
                              น้ำหนัก : 58 กิโลกรัม <br />
                            </p>
                          </li>
                        </ul>
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
