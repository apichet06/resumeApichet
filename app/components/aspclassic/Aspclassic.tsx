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
                    <Col md={12}>
                        <strong>ASP Classic</strong>
                        <hr />
                    </Col>
                    <Col md={6} className='py-2'>
                        <Carousel data-bs-theme="dark">
                            {Tankdata.map((item, index) => (
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
                                <strong> ระบบ Tank PM </strong>
                                <ul>
                                    <li>
                                        พัฒนาขึ้นเพื่อบันทึกข้อมูลแทนกระดาษที่มีอยู่เดิมคือบันทึกใส่กระดาษแล้วนำข้อมูลในกระดาษมาลงใน Excel อีกรอบ จึงได้จัดทำระบบนี้ขึ้นเพื่อลดกระดาษและลดขั้นตอนการทำงาน
                                        ให้สั้นลงและสามารถดูรายงานผ่านระบบได้รวดเร็วและสะดวกต่อการทำงานขึ้น
                                    </li>
                                    <li>ระบบบันทึกข้อมูลการเปลี่ยน Filter ของ Tank โดยมีการตั้งรอบระยะเวลาตามกำหนด Admin สามารถจัดการ ข้อมูลได้ ได้เองทั้งหมด</li>
                                    <li>สามารถเพิ่มลบแก้ไขข้อมูลได้,ออกรายงาน Excel ได้ </li>
                                    <li> พัฒนาด้วยภาษา ASP Classic ,Database Sql Server,Bootstrap 5</li>
                                    <li><a href="https://github.com/apichet06/Tank" target='_black'>Github</a></li>
                                    <li><a href="./images/aspclassic/Tank/ระบบบันทึกการเปลี่ยน Filter.pdf">คู่มือ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={12}><hr /></Col>
                    <Col md={6} >
                        <ul className='text-start py-4'>
                            <li>
                                <strong> ระบบ Hanger Repair</strong>
                                <ul>
                                    <li>สร้างขึ้นเพื่อบันทึกข้อมูลการซ่อมเข้าระบบและทดแทนกระดาษที่บันทึกอยู่ในปัจจุบัน</li>
                                    <li>ระบบบันทึกข้อมูลการซ่อมบำรุง Hanger โดยมีการตั้งรอบระยะเวลาตามกำหนดเข้าซ่อมบำรุง</li>
                                    <li>สามารถออกรายงาน Excel ได้</li>
                                    <li>พัฒนาด้วยภาษา ASP Classic ,Database Sql Server,Bootstrap 5</li>
                                    <li><a href="https://github.com/apichet06/Tank" target='_black'>Github</a></li>
                                    <li><a href="./images/aspclassic/Hanger/ระบบ Hanger Repair.pdf">คู่มือ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} className='py-2'>
                        <Carousel data-bs-theme="dark">
                            {Hangerdata.map((item, index) => (
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
                    <Col md={12}><hr /></Col>
                    <Col md={6} className='py-2'>
                        <Carousel data-bs-theme="dark">
                            {FOIdata.map((item, index) => (
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
                                <strong>ระบบ FOI </strong>
                                <ul>
                                    <li>
                                        ระบบบันทึกตรวจสอบการตรวจงานขั้นสุดท้าย FG ก่อนส่งงานให้ลูกค้า สร้างขึ้นเพื่อนำข้อมูลเข้าเก็บในฐานข้อมูลเนื่องจากข้อมูลมีความสำคัญ
                                        เกี๋ยวกับสินค้าส่งออกให้ลูกค้า และยังช่วยลดกระดาษในการบันทึกแต่ละครั้งลดความสูญหาของข้อมูลอีกด้วย
                                    </li>
                                    <li>สามารถเพิ่มข้อมูลข้อมูลการตรวจได้,สามารถค้นหารายการที่บันทึกไว้ได้,สามารถ Export Excel ได้ </li>
                                    <li>พัฒนาด้วยภาษา ASP Classic ,Database Sql Server,Bootstrap 5</li>
                                    <li><a href="https://github.com/apichet06/FOI" target='_black'>Github</a></li>

                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={12}><hr /></Col>
                    <Col md={6}>
                        <ul className='text-start py-4'>
                            <li>
                                <strong>ระบบโยก Status MTN PM&Repair</strong>
                                <ul>
                                    <li>สร้างขึ้นเพื่อแก้ไขกระบวนการทำงานของ User ที่ทำผิดขั้นตอนการทำงาน</li>
                                    <li>สามารถ Update Status ในกรณีที่ User ดำเนินการผ่านระบบ MTN แจ้งซ่อมผิดพลาด สามารถโยก Status เพื่อให้ User กลับมาดำเนินการต่อในระบบได้ </li>
                                    <li>สามารถยกเลิก Part User MTN จองเบิกผ่านระบบได้ ในกรณีที่ User MTN เบิกของเกินในระบบ </li>
                                    <li>พัฒนาด้วยภาษา ASP Classic ,Database Sql Server,Bootstrap 5  </li>
                                    <li> <a href="https://github.com/apichet06/FOI" target='_black'>Github</a> </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} className='py-2'>
                        <Carousel data-bs-theme="dark">
                            {FOIdata.map((item, index) => (
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
                    <Col md={12}>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
