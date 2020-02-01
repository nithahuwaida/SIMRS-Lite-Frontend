import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Layout, Menu, Icon} from 'antd';
import '../styles/stylePage.css';

const {Sider} = Layout;

const Navbar = (props) => {
    return(
        <div>
            <Sider
            style={{ minHeight:'100vh'}}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >
            <div className="logo">
                <p className="title">SIMRS Lite</p>
            </div>
                <Menu 
                    theme='dark'
                    mode="inline"
                    defaultSelectedKeys={[props.location.pathname]}
                    >
                    <Menu.Item key="/pendaftaran">
                        <Icon type="user-add" />
                        <span>Pendaftaran</span>
                        <Link to='/pendaftaran'/>
                    </Menu.Item>
                    <Menu.Item key="/pasien">
                        <Icon type="table" />
                        <span>Daftar Pasien</span>
                        <Link to='/pasien'/>
                    </Menu.Item>
                    {/* <Menu.Item key="/datapasien">
                        <Icon type="table" />
                        <span>Daftar Pasien</span>
                        <Link to='/datapasien'/>
                    </Menu.Item> */}
                </Menu>
            </Sider>
        </div>
    )
}

export default withRouter(Navbar);