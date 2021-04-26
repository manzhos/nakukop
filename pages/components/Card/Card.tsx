import { Box, Flex, Text } from '@chakra-ui/react'
import products from '../../../data/data_products'

export default function Card(props: any) {
  const product: any[] = []

  for (let pItem in products) {
    if (products[pItem].group === props.group) {
      product[pItem] = products[pItem]
    }
  }

  return (
      <div className='container row'>
        {
          product.map((item: any, index) => (
            <div className='col-md-4' key={index}>
              <div className='border border-1 border-secondary rounded p-3'>
                <div>
                  {item.name}
                </div>
                <div className='row mt-2'>
                  <div className='col-lg'>
                    <div>Quantity: <strong>{item.count}</strong></div>
                    <div>Cost: 
                      <span className={item.setColor}>
                        <strong>{item.cost}&nbsp;&#8381;</strong>
                      </span>
                    </div>
                  </div>
                  <div className='col-lg d-flex'>
                    <button className='btn btn-info btn-sm align-self-end'>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
  )
}

