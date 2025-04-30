import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
const RelatedProducts = ({category,subCategory}) => {
    const {products} = useSelector((state) => state.shop);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        
    })
  return (
    <div>

    </div>
  )
}

export default RelatedProducts