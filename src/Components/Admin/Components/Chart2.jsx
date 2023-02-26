import React, { PureComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { orderProduct } from '../../../Redux/AdminReducer/action';



export default function Chart2() {

    const prod=useSelector((store)=>store.AdminReducer.cart
    )
  
//  product={...product,"qty":product.qty*100}
   
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(orderProduct)
        
    }, [])
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={prod}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="oldprice" fill="red" />
          <Bar dataKey="price" fill="#2B6CB0" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

