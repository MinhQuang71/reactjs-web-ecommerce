/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from "./style";
import {StarFilled} from '@ant-design/icons'
import official from '../../assets/images/official.png'

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: '200px', height: '200px'}}
      style={{ width: 200 }}
      bodyStyle={{ padding: '10px'}}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
        <img 
            src={official}
            style={{ 
                width: '68px', height: '14px', position: 'absolute', top: -1, left: -1,
                borderTopLeftRadius: '3px' 
            }}
        />
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{ marginRight: '4px'}}>
                <span>4.75</span><StarFilled style={{fontSize: '12px', color: 'yellow'}} />
            </span>
            <WrapperStyleTextSell>
               | Đã bán 1000+
            </WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{ marginRight: '8px'}}>23.000.000d</span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
