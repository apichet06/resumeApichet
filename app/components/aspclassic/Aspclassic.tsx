import { time } from 'console'
import React from 'react'
import { Carousel, CarouselCaption, CarouselItem, Col, Container, Image, Row } from 'react-bootstrap'
import { Tankdata } from './Data/TankData'
import { Hangerdata } from './Data/HangerData'
import { FOIdata } from './Data/FoiData'

export default function Aspclassic() {

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <Carousel data-bs-theme="dark">
                            {Tankdata.map((item, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        className="d-block w-100"
                                        src={item.src}
                                        alt={item.alt}
                                    />
                                    <CarouselCaption>
                                        <h5>{item.textH}</h5>
                                    </CarouselCaption>
                                </CarouselItem>

                            ))}
                        </Carousel>
                    </Col>
                    <Col md={6}>
                        <ul className='text-start'>
                            <li>
                                <strong> ระบบ Tank PM </strong>
                                <ul>
                                    <li>
                                        ระบบบันทึกข้อมูล การเปลี่ยน Filter ของ Tank โดยมีการตั้งรอบระยะเวลาตามกำหนด Admin สามารถจัดการ ข้อมูลได้ ได้เองทั้งหมด
                                    </li>
                                    <li>
                                        สามารถเพิ่มลบแก้ไขข้อมูลได้,ออกรายงาน Excel ได้
                                    </li>
                                    <li>
                                        พัฒนาด้วยภาษา ASP Classic ,Database Sql Server
                                    </li>
                                    <li>
                                        <a href="https://github.com/apichet06/Tank" target='_black'>Github</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </Col>
                    <Col md={12}><hr /></Col>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <Carousel data-bs-theme="dark">
                            {Hangerdata.map((item, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        className="d-block w-100"
                                        src={item.src}
                                        alt={item.alt}
                                    />
                                    <CarouselCaption>
                                        <h5>{item.textH}</h5>
                                    </CarouselCaption>
                                </CarouselItem>

                            ))}
                        </Carousel>
                    </Col>
                    <Col md={6}></Col>
                    <Col md={12}><hr /></Col>
                    <Col md={6}>
                        <Carousel data-bs-theme="dark">
                            {FOIdata.map((item, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        className="d-block w-100"
                                        src={item.src}
                                        alt={item.alt}
                                    />
                                    <CarouselCaption>
                                        <h5>{item.textH}</h5>
                                    </CarouselCaption>
                                </CarouselItem>

                            ))}
                        </Carousel>
                    </Col>
                    <Col md={6}></Col>
                    <Col md={12}><hr /></Col>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <iframe
                            width="80%"
                            height="255"
                            src="https://www.youtube.com/embed/HzH6vW7k8sY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col md={6}></Col>
                    <Col md={12}><hr /></Col>
                    <Col md={6}>
                        <iframe
                            width="80%"
                            height="255"
                            src="https://www.youtube.com/embed/7-XJl3cOpU0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
