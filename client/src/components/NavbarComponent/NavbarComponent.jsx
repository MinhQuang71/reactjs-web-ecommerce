import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
  const onChange = () => { }
  const renderContent = (type, options) => {
    switch(type) {
        case 'text':
            return options.map((option) => {
                return (
                    <div>
                        <WrapperTextValue>{option}</WrapperTextValue>
                    </div>
                )
            })
        case'checkbox':
            return (
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {options.map((option) => {
                        return (
                            <Checkbox style={{marginLeft: '0'}} value={option.value}>{option.label}</Checkbox>

                        )
                    })}
                    <Checkbox value="B">B</Checkbox>
                </Checkbox.Group>
            )
        case'star':
           return options.map((option) => {
                return (
                    <div style={{ display: 'flex' }}>
                        <Rate style={{ fontSize: '12px'}} disabled defaultValue={option} />
                        <span> {`tu ${option} sao`} </span>
                    </div>
                )
            })
        case'price':
            return options.map((option) => {
                 return (
                    <WrapperTextPrice>{option}</WrapperTextPrice>
                 )
             })
            
        default:
            return {}
    }
  }
  return (
    <div>
        <WrapperLableText>Danh mục sản phẩm</WrapperLableText>
        <WrapperContent>
            {renderContent('text', ['Lap top', 'Loa', 'Máy giặt', 'Máy lọc nước', 'Nồi cơm', 'Robot hút bụi', 'Tivi', 'Tủ lạnh', 'Tủ đông', 'Điện thoại'])}
        </WrapperContent>
        
    </div>
  )
}

export default NavbarComponent

