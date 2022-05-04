import React from 'react'
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100
  const diff = 20

  switch(type){
    case "machine":
      data={
        title:"MACHINES",
        isMoney: false,
        link:"See all machines",
        icon: (
          <SmartToyOutlinedIcon
          className='icon'
          style={{
            color:"crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }} />)
        ,
      };
    break;

    case "order":
      data={
        title:"ORDERS",
        isMoney: false,
        link:"View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
          className='icon'
          style={{
            color:"goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
          }} />)
      };
    break;

    case "earning":
      data={
        title:"EARNINGS",
        isMoney: false,
        link:"View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
          className='icon'
          style={{
            color:"green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          }} />)
      };
    break;

    case "balance":
      data={
        title:"BALANCE",
        isMoney: false,
        link:"See details",
        icon: (
          <AccountBalanceOutlinedIcon
          className='icon'
          style={{
            color:"purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)",
          }} />)
      };
    break;
    default:
      break;
  }


  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget