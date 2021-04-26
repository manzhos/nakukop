import { Heading, Box } from '@chakra-ui/react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Card from './components/Card'
import names from '../data/data_names'

// import product from '../data/data_products'

export default function GoodsPage() {
  const goods: any[] = []
  for(let i in names){
    goods.push(names[i])
  }
 
  return (
      <div className='container mt-5'>
            <Heading>Товары</Heading>
            <hr/>
            <Box>
              {
                goods.map((item: any, index) => (
                  <div className='card mb-4' key={index}>
                    <div className="card-body">
                      <h4 className='card-title pb-3'>{item.G}</h4>
                       <Card 
                          group = {item.G}
                       />
                    </div>
                  </div>
                ))
              }
            </Box>
            <hr className='mt-5 mb-5' />
      </div>
  );
}
                            