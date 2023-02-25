import React from 'react'
import Chart1 from '../Components/Chart1'
import Chart2 from '../Components/Chart2'

export const Dashboard = () => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",marginBottom:"40px"}} >
      <div style={{height:"auto",textAlign:"center"}}><h1>Product Data In Line Chart</h1>
      <Chart1/>
      </div>
      <div style={{height:"350px",textAlign:"center"}}><h1>Ordered Data in Line</h1>
      <Chart2/>
      </div>
      
    </div>
  )
}
