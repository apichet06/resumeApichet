import React from 'react'
import { Accordion, AccordionHeader, AccordionItem, Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'

function Profile() {

    return (
        <>
            <Container >
                <Row>
                    <Col md={12} className='p-3'>
                        <Card className='shadow'>
                            <CardBody>
                                <Row>
                                    <Col md={9} className='text-nowrap d-flex align-items-center justify-content-center'>
                                        <div>
                                            <strong style={{ fontSize: "70px" }}>นายอภิเชษฐ์ สิงห์นาครอง</strong>
                                            <h2 className='text-success'>PROGRAMMER SUPERVISOR</h2>
                                        </div>
                                    </Col>
                                    <Col md={3} className='my-1'>
                                        <Image src="./images/profile.jpg" alt='profile' width="60%" roundedCircle thumbnail />
                                    </Col>
                                    <Col md={12}><hr /></Col>
                                    <Col md={4}  >
                                        <Card >
                                            <CardBody>
                                                <ul>
                                                    <li> <h3>ตำแหน่งที่สนใจ</h3>
                                                        <ul>
                                                            <li>PROGRAMMER</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <Accordion defaultActiveKey="3" flush>
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
                                                        <AccordionHeader><strong>ช่องทางการติดต่อ</strong></AccordionHeader>
                                                        <AccordionBody>
                                                            <ul>
                                                                <li>ที่อยู่ : บ้านพรรณนิศา 61 ตำบล ต.ธนู อ.อุทัย จ.พระนครศรีอยุธยา 13000</li>
                                                                <li>อีเมล : Apichet1.1@hotmail.co.th</li>
                                                                <li>โทร. : 091-419-8805</li>
                                                            </ul>
                                                        </AccordionBody>
                                                    </AccordionItem>
                                                    <AccordionItem eventKey="2">
                                                        <AccordionHeader><strong>ประวัติการศึกษา</strong></AccordionHeader>
                                                        <AccordionBody>
                                                            <ul>
                                                                <li>
                                                                    <strong>มหาวิทยาลัยมหาสารคาม</strong>
                                                                    <ul>
                                                                        <li>ระดับปริญญาตรี</li>
                                                                        <li>คณะวิทยาการสารสนเทศ</li>
                                                                        <li>สาขาเทคโนโลยีสารสนเทศและการสื่อสาร | 2554 - 2558</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>

                                                                    <strong>วิทยาลัยเทคนิคกาฬสินธุ์</strong>
                                                                    <ul>
                                                                        <li>ระดับปวส.</li>
                                                                        <li>สาขาเทคโนโลยีคอมพิวเตอร์ <br />| 2552 - 2554</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>

                                                                    <strong>วิทยาลัยเทคนิคกาฬสินธุ์</strong>
                                                                    <ul>
                                                                        <li>ระดับปวช.</li>
                                                                        <li>สาขาไฟฟ้าและอิเล็กทรอนิกส์ <br />| 2549- 2552</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </AccordionBody>
                                                    </AccordionItem>
                                                    <AccordionItem eventKey="3">
                                                        <AccordionHeader><strong>ทักษะและความสามารถ</strong></AccordionHeader>
                                                        <AccordionBody >
                                                            <ul>
                                                                <li><strong>สามารถวิเคราะห์และออกแบบระบบได้</strong></li>
                                                                <li>
                                                                    <strong>Backend</strong>
                                                                    <ul>
                                                                        <li>PHP</li>
                                                                        <li>ASP Classic</li>
                                                                        <li>Node.js Express</li>
                                                                        <li>C#,ASP.NET Core Web API </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <strong>Frontend</strong>
                                                                    <ul>
                                                                        <li><strong>CSS Frameworks</strong></li>
                                                                        <ul>
                                                                            <li>Bootstrap</li>
                                                                            <li>Material UI</li>
                                                                        </ul>

                                                                        <li><strong>JavaScript Frameworks/Libraries</strong></li>
                                                                        <ul>
                                                                            <li>React18</li>
                                                                            <li>ReactTypescript</li>
                                                                            <li>NextJS</li>
                                                                            <li>jQuery</li>
                                                                        </ul>

                                                                        <li><strong>AJAX Libraries:</strong></li>
                                                                        <ul>
                                                                            <li>Ajax</li>
                                                                            <li>Axios</li>
                                                                        </ul>

                                                                        <li><strong>Notification Library</strong></li>
                                                                        <ul>
                                                                            <li>Sweet Alert</li>
                                                                        </ul>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <strong>Database</strong>
                                                                    <ul>
                                                                        <li>MySQL</li>
                                                                        <li>SQL Server</li>
                                                                    </ul>

                                                                    <strong>Mobile App</strong>
                                                                    <ul>
                                                                        <li>Flutter (กำลังศึกษา)</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>


                                                        </AccordionBody>
                                                    </AccordionItem>
                                                </Accordion>

                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md={8} >
                                        <Card >
                                            <CardBody>
                                                <ul>
                                                    <li>
                                                        <h4>จุดมุ่งหมาย</h4>
                                                        <ul>
                                                            <li>สนใจงาน โปรแกรมเมอร์ จะนำความรู้ ทักษะและประสบการณ์ทั้งหมดที่มีมาใช้ในการทำงานเพื่อพัฒนาหน่วยงานและองค์กร</li>
                                                            <li>พร้อมเรียนรู้สิ่งใหม่ ๆ เพื่อพัฒนาตนเอง</li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h4>ประสบการณ์การทํางาน</h4>
                                                        <ul>
                                                            <li className='text-success'>บริษัท เคซีอี เทคโนโลยี จำกัด (เมษา 2564 - ปัจจุบัน)</li>
                                                            <li> <strong className='text-secondary'>Programmer Supervisor</strong>
                                                                <ul>
                                                                    <li>วิเคราะห์และออกแบบระบบ และรวบรวมข้อมูลส่งให้ทีม DEV พัฒนา Project</li>
                                                                    <li>ทดสอบระบบหาข้อผิดพลาดของระบบ กรณีมีระบบใหม่ๆ เกิดขึ้น </li>
                                                                    <li>พัฒนาและปรับปรุงเว็บไซต์ จัดทำระบบ Frontend และ Backend ด้วยภาษา Asp Classic,javaScript,Ajax,jQuery,Sweet Alert
                                                                        ,Bootstrap 5 | Database Sql Server</li>
                                                                    <li>จัด Training วิธีการใช้งานระบบให้กับผู้ใช้งาน กรณีมีระบบใหม่ๆเกิดขึ้น</li>
                                                                    <li>ดูแลและแก้ไขปัญหาให้ผู้ใช้งานผ่านระบบ network ด้วยโปรแกรม RealVNC</li>
                                                                    <li>ใช้งาน Sap ตรวจสอบข้อมูล หากพบความผิดพลาดใน ระบบ K2</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <hr />

                                                        <ul>
                                                            <li className='text-success'>บริษัท เดฟ เอกซ์ (ไทยแลนด์) (พ.ย 2562 - กุมภาพันธ์ 2564)</li>
                                                            <li><strong className='text-secondary'>Programmer </strong>
                                                                <ul>
                                                                    <li>วิเคราะห์และออกแบบระบบ</li>
                                                                    <li>พัฒนาและปรับปรุงเว็บไซต์ จัดทำระบบ Frontend และ Backend,Responsive สามารถใช้งานผ่าน Mobile ได้ </li>
                                                                    <li>ภาษาที่ใช้ PHP,Html5,My SQL,bootstrap 4,JavaScript,Ajax,jQuery,Sweet Alert</li>
                                                                    <li>จัด Training วิธีการใช้งานระบบให้กับผู้ใช้งาน กรณีมีระบบใหม่ๆเกิดขึ้น</li>
                                                                    <li>จัดทำ clip video แนะนำขั้นตอนวิธีใช้งานระบบให้กลับลูกค้า </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <hr />
                                                        <ul>
                                                            <li className='text-success'>บริษัทเมจิกเวิลด์ จำกัด (ส.ค. 2559 - ต.ค. 2562)</li>
                                                            <li><strong className='text-secondary'>เจ้าหน้าที่ IT Support</strong>
                                                                <ul>
                                                                    <li>วิเคราะห์และออกแบบระบบ</li>
                                                                    <li>ปรับปรุงและพัฒนาเว็บไซต์ ด้วยภาษา PHP,Html5,My SQL,bootstrap 4,JavaScript,Ajax,jQuery</li>
                                                                    <li>ใช้โปรแกรม illustrator, Photoshop ในการออกแบบงานต่างๆ </li>
                                                                    <li>ติดตั้งระบบ pfSense Firewall ระบบ Authentications & ดูแลระบบ</li>
                                                                    <li>remote control ผ่านระบบ network เพื่อแก้ไขปัญหาต่างๆ ให้กับ User</li>
                                                                    <li>ติดตั้งระบบ OS Linux mint, ubuntu</li>
                                                                    <li>Support ผู้ใช้งาน เกี่ยวกับระบบ Mail ภายนอกและภายใน ด้วยโปรแกรม Mozilla thunderbird </li>
                                                                    <li>ซ่อม Computer และเปลี่ยนถ่าย Hardware Computer PC และ Notebook ติดตั้งระบบ Windows</li>
                                                                    <li>ดูแลกล้อง CCTV</li>
                                                                    <li>ดูแลบำรุงเครื่องปลิ้นสำนักงาน</li>
                                                                    <li>ดูแลระบบโทรศัทพ์ภายในสำนักงาน</li>
                                                                    <li>ดูแลและบำรุงรักษา UPS เครื่องสำรองไฟ</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>


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


export default Profile
