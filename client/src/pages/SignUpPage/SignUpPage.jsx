import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextlight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { Image } from 'antd'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png'

const SignUpPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)'}}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin Chào!</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px'}} placeholder="abc@gmail.com"/>
          
          <ButtonComponent
                      bordered={false}
                      size={40} 
                      styleButton={{background: 'rgb(255, 57, 69)', height: '48px', width: '100%', border: 'none', borderRadius: '4px', margin: '26px 0 10px' }} 
                      textButton={'Đăng nhập'}
                      styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700'}}>
          </ButtonComponent>
          <p>Bạn đã có tài khoản? <WrapperTextlight> Đăng ký </WrapperTextlight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
          <h4>Mua sắm tại GUANGBANG</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage