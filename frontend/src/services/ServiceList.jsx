import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"


const servicesData =[
{
    
    title: "Travel with Ease ",
    desc:"Experience seamless and hassle-free travel planning with our top-notch airline reservation system, designed to make your journeys stress-free and enjoyable."
},
{
   
    title: "Personalized Booking",
    desc:"Tailor your travel experience to your preferences with our extensive customized  options , allowing you to book flights,and services.",
},
{
    
    title: "Peace of Mind",
    desc: "Book your flights with confidence, backed by our satisfaction guarantee. Your peace of the mind is our priority, ensuring a worry-free travel experience.",
}]

const ServiceList = () => {
  return   <>
  {
    servicesData.map((item,index)=> 
    <Col lg='3' key={index}>
        <ServiceCard item={item}/>
    </Col>)
  }
  
  </> 
  }

export default ServiceList