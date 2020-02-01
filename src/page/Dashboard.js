import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Layout,Typography,Dropdown,Icon, Menu } from 'antd';
import '../styles/stylePage.css';
import Navbar from '../components/Navbar';

import AddPatient from './admin/AddPatient';
import Patient from './admin/Patient';
import DataPatient from './doctor/Patient';

const { Header, Content} = Layout;
const { Text } = Typography;

const Dashboard = () => {
    const menu = (
        <Menu className="menu-dropdown">
          <Menu.Item key="1">
            <Icon type="logout"/>
            Logout
          </Menu.Item>
        </Menu>
      );

    return(
        <BrowserRouter>
            <div>
                <Layout style={{ minHeight:'100vh', background: '#cdbf90'}}>
                    <Navbar/>
                    <Layout>
                    <Header style={{ background: '#72270f', padding: 0 }}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <div className='header-icon'>
                                <Icon type='user'/>
                                <Text style={{ color: '#fff'}}> Admin </Text>
                            </div>
                        </Dropdown>
                    </Header>
                    <Content className="container">
                        <Route exact path="/pendaftaran" component={AddPatient} />
                        <Route path="/pasien" component={Patient} />
                        <Route path="/datapasien" component={DataPatient} />
                    </Content>
                    </Layout>
                </Layout>
            </div>
        </BrowserRouter>
    )
}

export default Dashboard;