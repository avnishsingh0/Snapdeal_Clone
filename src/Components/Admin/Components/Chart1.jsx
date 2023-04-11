// import "./styles.css";
import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { getProducts } from "../../../Redux/ProductReducer/actions";



export default function Chart1() {

    const product=useSelector((store)=>store.AdminReducer.products
    )

   
    
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProducts)
        
    }, [])
  const [opacity, setOpacity] = useState({
    
    price: 1
  });

  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );

  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={product}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="brand" />
        <YAxis />
        <Tooltip/>
        <Legend
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Line
          type="monotone"
          dataKey="price"
          strokeOpacity={opacity.price}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        
      </LineChart>
      
    </div>
  );
}
