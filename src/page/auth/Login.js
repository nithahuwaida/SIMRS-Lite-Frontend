import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import '../../styles/login.css'
import { Row, Col, Form, Button, Input, Icon, notification} from 'antd';

const Login = (props) => {
  const data = [
    {
      id: '1',
      name: 'Nitha Huwaida',
      address: 'Jalan cempaka tengah, Jakart Pusat',
      phone_number : '081327567432',
      username:'nithahuwaida',
      role: 'Admin',
      polyclinic:null,
    },
    {
      id: '2',
      name: 'dr.IRIANTA DWI POEJASAPUTRA, Sp.D',
      address: 'Jalan Solo, Jakarta Pusat',
      phone_number : '085678900100',
      username :'iriantadwi',
      role: 'Dokter',
      polyclinic:'Poli Dalam',
    },
    {
      id: '3',
      name: 'dr.HESA KUSUMA, Sp.OG',
      address: 'Jalan Brobrus no. 10, Jakarta Pusat',
      phone_number : '085678900100',
      username : 'hesakusuma',
      role: 'Dokter',
      polyclinic : 'Poli Kandungan',
    },
  ]
    const initialFormState = { username: "", password: "" };
    const [input, setInput] = useState(initialFormState);
  
    const handleSubmit = async event => {
      event.preventDefault();
      data.filter((item) => {
        if(item.username === input.username){
          localStorage.setItem('user-id', item.id);
          localStorage.setItem('user-username', item.username);
          localStorage.setItem('user-role', item.role);
          this.props.history.push('/pendaftaran')
          notification['success']({
            message: 'Berhasil Masuk',
            description:
              'Selamat Datang di Aplikasi SIMS Lite',
          });
        }
      })
    };
  
    const handleChange = inputName => event => {
      setInput({ ...input, [inputName]: event.target.value });
    };
  return (
    <div id="login">
      <Row className="row" type="flex">
        <Col lg={{ span: 17 }} xs={{ span: 0 }} className="bg-image"></Col>
        <Col lg={{ span: 7 }} xs={{ span: 24 }} className="login-container">
        <Row style={{ height: "40%" }} type="flex" align="middle">
            <div className="title-container">
              <p className="title">SIMRS Lite</p>
              <p className="tagline">Solusi Terbaik Untuk Rumah Sakit Anda</p>
            </div>
          </Row>
          <Row style={{ height: "60%" }} type="flex">
            <Form style={{ height: "70%" }}  className="login-form">
              <p className="title-h2">Masuk</p>
              <Input
                style={{ marginBottom: "20px" }}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                onChange={handleChange("username")}
                value={input.username}
                size="large"
              />
              <Input.Password
                style={{ marginBottom: "20px" }}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                onChange={handleChange("password")}
                value={input.password}
                size="large"
              />
              <Button
                onClick={handleSubmit}
                style={{ marginBottom: "15px" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
              >
                Masuk
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Login;