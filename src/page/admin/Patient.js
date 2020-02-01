import React, { useState } from 'react';
import { Layout, Table, Input, Button, Icon, Modal, Breadcrumb} from 'antd';
import Highlighter from 'react-highlight-words';

const { Content } = Layout;
const { confirm } = Modal;

const Patient= () => {
  const dataSource = [
    {
      key: '1',
      name: 'Dimas Amar',
      address: 'Jalan Kuning no.5, Jakarta barat',
      phone_number : '081327567432',
      polyclinic : 'Poli Dalam',
      doctor:'dr.IRIANTA DWI POEJASAPUTRA, Sp.D'

    },
    {
      key: '2',
      name: 'Ratna Marisa',
      address: 'Jalan Sudirman Cemapak Putih, Jakarta Pusat',
      phone_number : '085678900100',
      polyclinic : 'Poli Kandungan',
      doctor:'dr.HESA KUSUMA, Sp.OG'
    },
    {
      key: '3',
      name: 'Animah Rumasya',
      address: 'Jalan Raya Selatan rt003/045, Bekasi',
      phone_number : '085098567543',
      polyclinic : 'Poli Saraf',
      doctor:'dr.NOEGROHO HARBANI, Sp.S., M.Sc'
    },
    {
      key: '4',
      name: 'Deo Helman',
      address: 'Jalan Sarjana no.1, Jakarta Selatan',
      phone_number : '085678456324',
      polyclinic : 'Poli Bedah',
      doctor :'dr.HERI SUGIANTO, Sp.B'
    },
    {
      key: '5',
      name: 'Mike Amar',
      address: 'Jalan Gambir Tugu no 45, Jakarta Pusat',
      phone_number : '081234546789',
      polyclinic : 'Poli Anak',
      doctor : 'dr.DIN ALVINA, Sp.A'
    },
  ];

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
            dataIndex: 'key',
            key: 'key',
            ...getColumnSearchProps('no'),
          },
        {
          title: 'Nama Lengkap',
          dataIndex: 'name',
          key: 'name',
          ...getColumnSearchProps('name'),
        },
        {
            title: 'Alamat',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('address'),
        },
        {
            title: 'Nomer Telepon',
            dataIndex: 'phone_number',
            key: 'phone_number',
            ...getColumnSearchProps('phone_number'),
        },
        {
            title: 'Poli Klinik',
            dataIndex: 'polyclinic',
            key: 'polyclinic',
            ...getColumnSearchProps('polyclinic'),
        },
        {
            title: 'Dokter',
            dataIndex: 'doctor',
            key: 'doctor',
            ...getColumnSearchProps('doctor'),
        },
        {
          title: 'Action',
          dataIndex: "id",
          key: 'action',
          render: (id, record) =>
            <span>
              <Button 
                type="primary" 
                size="small" 
                icon="edit"
                ghost
              />
            </span>
        },
      ];

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
            <Table 
              rowKey={record => record.id}
              columns={columns}
              dataSource={dataSource}
            //   loading={isLoading}
              size={"small"}
            />
          </Content>
        </Layout>
    )
}

export default Patient;