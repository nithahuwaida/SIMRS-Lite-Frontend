import React, { useState } from 'react';
import { Layout, Table, Input, Button, Icon, Modal, Breadcrumb, Form} from 'antd';
import Highlighter from 'react-highlight-words';
import '../../styles/stylePage.css';

const { Content } = Layout;
const { confirm } = Modal;

const Patient= () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

    const indexColumns = searchedColumn.input;
    const indexSearchText = searchText.searchText;
    
      const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Cari
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        render: text =>
        indexColumns === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[indexSearchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          ),
      });
    
      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        const input= dataIndex;
        setSearchText({
          searchText: selectedKeys[0]
        });
        setSearchedColumn({
          input 
        });
      };
    
      const handleReset = clearFilters => {
        clearFilters();
        setSearchText({ searchText: '' });
      };
    
      const columns = [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
            ...getColumnSearchProps('no'),
          },
        {
          title: 'Nama Lengkap',
          dataIndex: 'name',
          key: 'name',
          ...getColumnSearchProps('nama lengkap'),
        },
        {
            title: 'Alamat',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('alamat'),
        },
        {
            title: 'Nomer Telepon',
            dataIndex: 'phone_number',
            key: 'phone_number',
            ...getColumnSearchProps('nomer telepon'),
        },
        {
          title: 'Action',
          dataIndex: "id",
          key: 'action',
          render: (id, record) =>
            <span>
              <Button 
                type="danger" 
                size="small" 
                icon="delete"
                ghost
              />
            </span>
        },
    ];
    const formItemLayout = {
        labelCol: {
          xs: { span: 2 },
          sm: { span: 2 },
        },
        wrapperCol: {
          xs: { span: 8 },
          sm: { span: 8 },
        },
      };

    return (
        <Layout>
          <Content className="gutter-example" style={{background: 'white'}}>
            <Breadcrumb style={{marginBottom: '10px'}}>
                <Breadcrumb.Item href="">
                    <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item >
                    <Icon type="table"/>
                    <span>Daftar pasien</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Form {...formItemLayout} >
                <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="Dokter">
                <Input type="text" disabled="disabled" value='Dr. Nitha Huwaida Hafizha'/>
                </Form.Item>
                <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="Poli Klinik">
                <Input type="text" disabled="disabled" value='Dokter Anak'/>
                </Form.Item>
            </Form>
            <Table 
              rowKey={record => record.id}
              columns={columns}
            //   dataSource={categoryList}
            //   loading={isLoading}
              size={"small"}
            />
          </Content>
        </Layout>
    )
}

export default Patient;