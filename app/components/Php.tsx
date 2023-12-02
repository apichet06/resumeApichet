import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'


export default function Php() {
    return (
        <>
            <Container>
                <Row >
                    <Col md={12}>
                        <strong>PHP</strong>
                        <hr />

                    </Col>
                    <Col md={6}>
                        <iframe
                            width="80%"
                            height="255"
                            src="https://www.youtube.com/embed/z4UFrab2Sm4"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col md={6}>
                        <ul className='text-start'>
                            <li>
                                <h3>ระบบ X-Service</h3>
                                <ul>
                                    <li>
                                        พัฒนาขึ้นเพื่อมอบหมายงานของช่างที่มีในแต่ละสาขาทั่วประเทศของบริษัทแห่งหนึ่ง ตามสัญญาซื้อขายที่มีในการทำสัญญาการรับประกัน warranty เครื่องใช้ไฟฟ้ามีอาการเสียและอยู่ในประกัน
                                        ช่างจะเข้าตรวจเช็คและบันทึกข้อมูลผ่านระบบ X-Service ผ่าน mobile Applications
                                    </li>
                                    <li>พัฒนาด้วย Php version 7 , Mysql, Bootstrap 4,javascript</li>
                                    <li><a href="https://github.com/apichet06/Service_CU" target='_black'>Github</a></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={12}><hr /></Col>
                    <Col md={6}>
                        <ul className='text-start'>
                            <li>
                                <h3>ระบบ Safety </h3>
                                <ul>
                                    <li>
                                        พัฒนาขึ้นเพื่อบันทึกข้อมูลเกี่ยวกับงาน Safety เช่น กิจกรรมงานซ้อมดับเพลิง , บันทึกข่าวสารการเกิดอุบัติการณ์หรืออุบัติเหตุภายในองค์กร,สามารถทำบัติ Passport ให้กับพนักงานที่ฝึกอบรมผ่าน
                                        Safety ได้,สามารถตั้งกระทู้แสดงความคิดเห็นหรือสอบถามเกี่ยวกับเรื่องความปลอดภัยผ่านระบบได้
                                    </li>
                                    <li>พัฒนาด้วย Php version 5, Mysql, Bootstrap 4,javascript</li>
                                    <li><a href="https://github.com/apichet06/FOI" target='_black'>Github</a></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <iframe
                            width="80%"
                            height="255"
                            src="https://www.youtube.com/embed/fi8neMI0Yhw"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col>

                    <Col md={12}><hr /></Col>
                    <Col md={6}>
                        <iframe
                            width="80%"
                            height="255"
                            src="https://www.youtube.com/embed/10lpkR5T05o"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col md={6}>
                        <ul className='text-start'>
                            <li>
                                <h3>ระบบ Safety Line Notifications </h3>
                                <ul>
                                    <li>
                                        เมื่อมีการบันทึกข้อมูลเกี่ยวกับความปลอดภัย ระบบจะแจ้งเตือนไปยัง Line notifications
                                    </li>
                                    <li>พัฒนาด้วย Php version 5, Mysql, Bootstrap 4,javascript, Line notifications</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={12}><hr /></Col>
                    <Col md={6}>
                        <ul className='text-start py-2'>
                            <li>
                                <h3>ระบบบันทึกการทำงานในแต่ละวัน</h3>
                                <ul>
                                    <li>
                                        ระบบบันทึกการทำงานในแต่ละวันเพื่อสรุปงานที่ทำประจำเดือน/ปีให้กับผู้บริหารทราบ
                                    </li>
                                    <li>พัฒนาด้วย Php version 5, Mysql, Bootstrap 4,javascript, Line notifications</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
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
                    <Col md={6}>
                        <ul className='text-start py-2'>
                            <li>
                                <h3>ระบบ Stock</h3>
                                <ul>
                                    <li>ระบบบันทึกการทำงานในแต่ละวันเพื่อสรุปงานที่ทำประจำเดือน/ปีให้กับผู้บริหารทราบ</li>
                                    <li>พัฒนาด้วย Php version 5, Mysql, Bootstrap 4,javascript, Line notifications</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row >
            </Container >
        </>
    )
}
