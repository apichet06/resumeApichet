import React from 'react'
import { CarouselCaption, CarouselItem, Image } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import { Col, Row, Container } from 'react-bootstrap'
import { SaleData } from './Data/Sale_goods'


export default function NodeExpress() {
    return (
        <Container>
            <Row >
                <Col md={12}>
                    <strong>Nodejs Express</strong>
                    <hr />
                </Col>

                <Col md={6} className='py-2'>
                    <Carousel data-bs-theme="dark">
                        {SaleData.map((item, index) => (
                            <CarouselItem key={index}>
                                <Image
                                    className="d-block w-100"
                                    src={item.src}
                                    alt={item.alt}
                                />
                                <CarouselCaption>
                                    <h6>{item.textH}</h6>
                                </CarouselCaption>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </Col>
                <Col md={6}>
                    <ul className='text-start py-4'>
                        <li>
                            <strong> Sale Goods API </strong>
                            <ul>
                                <li>
                                    พัฒนาขึ้นเพื่อจัดทำระบบขายสินค่า Online โดยมีเส้น API การสมัครสมาชิก เพื่อสั่งซื้อสินค้า
                                </li>
                                <li> พัฒนาด้วยภาษา NodeJs ,Express,Database Mysql version 8</li>
                                <li><a href="https://github.com/apichet06/sale_goodsAPI" target='_black'>Github</a></li>
                                <li><a href="https://frantic-fawn-dress.cyclic.app/api/product" target='_black'>API</a></li>
                            </ul>
                        </li>
                    </ul>
                </Col>
                <Col md={12}>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}
