import React, { useState } from 'react';
// import jsonp from 'fetch-jsonp';
// import querystring from 'querystring';
import 'antd/dist/antd.css';
import '../../styles/stylePage.css';
import { Form, Input, Select, Button, Breadcrumb, Icon, Row, Col} from 'antd';

const { Option } = Select;
// let timeout;
// let currentValue;

// function fetch(value, callback) {
//   if (timeout) {
//     clearTimeout(timeout);
//     timeout = null;
//   }
//   currentValue = value;

//   function fake() {
//     const str = querystring.encode({
//       code: 'utf-8',
//       q: value,
//     });
//     jsonp(`https://suggest.taobao.com/sug?${str}`)
//       .then(response => response.json())
//       .then(d => {
//         if (currentValue === value) {
//           const { result } = d;
//           const data = [];
//           result.forEach(r => {
//             data.push({
//               value: r[0],
//               text: r[0],
//             });
//           });
//           callback(data);
//         }
//       });
//   }

//   timeout = setTimeout(fake, 300);
// }

const RegistrationForm = (props) => {
    const { getFieldDecorator } = props.form;
    // const initialFromState = {
    //     data: [],
    //     search : undefined,
    // }
    // const [input, setInput] = useState(initialFromState)
    
    //   const handleSearch = search => {
    //     if (search) {
    //       fetch(search, data => setInput({ data }));
    //     } else {
    //       setInput({ data: [] });
    //     }
    //   };
    
    //   const handleChange = search => {
    //     setInput({ search });
    //   };
    
    // const options = input.data.map(d => <Option key={d.value}>{d.text}</Option>);  

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    return (
        <div >
            <Breadcrumb style={{marginBottom: '10px'}}>
                <Breadcrumb.Item href="">
                    <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item >
                    <Icon type="user-add"/>
                    <span>Pendaftaran</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Form 
                className='add-form'
                layout='vertical'
                onSubmit={handleSubmit}
            >
                <p className="title-add">Pendaftaran Pasien</p>
                               
                <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="Nama Lengkap">
                {getFieldDecorator('name', {
                    rules: [
                        { 
                            required: true, 
                            message: 'Nama Lengkap tidak boleh kosong!' 
                        }
                    ],
                })(<Select
                    showSearch
                    // value={input.search}
                    placeholder={props.placeholder}
                    style={props.style}
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    // onSearch={handleSearch}
                    // onChange={handleChange}
                    notFoundContent={null}
                  >
                    <Option key={'1'}>oke</Option>
                  </Select>)}
                </Form.Item>
                <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="Alamat">
                {getFieldDecorator('address', {
                    rules: [
                        {
                            required: true,
                            message: 'Alamat tidak boleh kosong',
                        },
                    ],
                })(<Input />)}
                </Form.Item>
                <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="Nomer telepon">
                {getFieldDecorator('phone_number', {
                    rules: [
                        {
                            required: true,
                            message: 'Nomer telepon tidak boleh kosong',
                        },
                    ],
                })(<Input/>)}
                </Form.Item>
                <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="Poli Klinik">
                {getFieldDecorator('id_polyclinic', {
                    rules: [
                        { 
                            required: true, 
                            message: 'Poli Klinik tidak boleh kosong!' 
                        }
                    ],
                })(<Select>
                    <Option key={'1'}>oke</Option>
                  </Select>)}
                </Form.Item>
                <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="Dokter">
                {getFieldDecorator('id_dokter', {
                    rules: [
                        { 
                            required: true, 
                            message: 'Dokter tidak boleh kosong!' 
                        }
                    ],
                })(<Select>
                    <Option key={'1'}>oke</Option>
                  </Select>)}
                </Form.Item>
                <Form.Item>
                    <Row type="flex">
                        <Col lg={{ span: 17 }}>
                            <p className="title-submit">Jika data sudah benar, Silakan register</p>
                        </Col>
                        <Col lg={{ span: 7 }}>
                            <Button className='submit-add' type="primary" htmlType="submit">
                                Daftar
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    )
}
const AddPatient = Form.create({ name: 'register' })(RegistrationForm);

export default AddPatient;

// class RegistrationForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.lastFetchId = 0;
//         this.fetchUser = debounce(this.fetchUser, 800);
//     }

//     state = {
//         data:[],
//         value: '',
//         fetching: false,
//     };
    
//     fetchUser = value => {
//         console.log('fetching user', value);
//         this.lastFetchId = 1;
//         const fetchId = this.lastFetchId;
//         this.setState({ data:[], fetching: true });
//         fetch('https://randomuser.me/api/?results=5')
//             .then(response => response.json())
//             .then(body => {
//             if (fetchId !== this.lastFetchId) {
//                 return;
//             }
//             const data = body.results.map(user => ({
//                 text: `${user.name.first} ${user.name.last}`,
//                 value: user.login.username,
//             }));
//             this.setState({ data, fetching: true});
//         });
//     };
    
//     handleChange = value => {
//         this.setState({
//             value,
//             data:[],
//             fetching: false,
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.form.validateFieldsAndScroll((err, values) => {
//             if (!err) {
//                 console.log('Received values of form: ', values);
//             }
//         });
//     };

//     render(){
//         const { getFieldDecorator } = this.props.form;
//         const { fetching, data, value } = this.state;

//         return (
//             <div >
//                 <Breadcrumb>
//                     <Breadcrumb.Item href="">
//                         <Icon type="home" />
//                     </Breadcrumb.Item>
//                     <Breadcrumb.Item >
//                         <Icon type="user-add"/>
//                         <span>Pendaftaran</span>
//                     </Breadcrumb.Item>
//                 </Breadcrumb>
//                 <Form 
//                     className='add-form'
//                     layout='vertical'
//                     onSubmit={this.handleSubmit}
//                 >
//                     <p className="title-add">Pendaftaran Pasien</p>
//                     <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="E-mail">
//                     {getFieldDecorator('email', {
//                         rules: [
//                         {
//                             type: 'email',
//                             message: 'The input is not valid E-mail!',
//                         },
//                         {
//                             required: true,
//                             message: 'Please input your E-mail!',
//                         },
//                         ],
//                     })(<Input />)}
//                     </Form.Item>
                    
//                     <Form.Item style={{padding: '5px 20px 5px 20px', marginBottom: '0px'}} label="Nama Lengkap">
//                     {getFieldDecorator('name', {
//                         rules: [{ required: true, message: 'Masukkan Nama Lengkap!' }],
//                     })(<Select
//                             mode="multiple"
//                             labelInValue
//                             value={value}
//                             placeholder="Select users"
//                             notFoundContent={fetching ? <Spin size="small" /> : null}
//                             filterOption={false}
//                             onSearch={this.fetchUser}
//                             onChange={this.handleChange}
//                             style={{ width: '100%' }}
//                         >
//                             {data.map(d => (
//                             <Option key={d.value}>{d.text}</Option>
//                             ))}
//                         </Select>)}
//                     </Form.Item>
                    
                    
//                     <Form.Item>
//                     <Button type="primary" htmlType="submit">
//                         Register
//                     </Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         )
//     } 
// }

// const AddPatient = Form.create({ name: 'register' })(RegistrationForm);

// export default AddPatient;