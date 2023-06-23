/* eslint-disable no-undef */
import React from "react";
import { Badge, Col } from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  console.log('user', user)
  return (
    <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
      <WrapperHeader>
        <Col span={5}>
            <WrapperTextHeader>GuangBang</WrapperTextHeader>
        </Col>

        <Col span={13}>
        <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tim Kiem"
            placeholder="Tìm thứ bạn cần ở đây..."
        />
        </Col>

        <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center'}} >
            <WrapperHeaderAccount>
                <UserOutlined style={{ fontSize: '30px'}} />
                {user?.name ? (
                  <div style={{ cursor: 'pointer'}}>{user.name}</div>
                ) : (
                  <div onClick={handleNavigateLogin} style={{ cursor: 'pointer'}}>
                    <WrapperTextHeaderSmall>Đăng Nhập/ Đăng Ký</WrapperTextHeaderSmall>
                    <div>
                        <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                    </div>
                  </div>
                )}
                
            </WrapperHeaderAccount>
            <div>
                <Badge count={4} size="small" >
                    <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff'}}/>
                </Badge>
                <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
            </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
