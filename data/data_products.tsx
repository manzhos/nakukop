import { getTransformTemplate } from '@chakra-ui/styled-system'
import names from '../data/data_names'

var product:any[] = []
// var products:any = ''

const minRate: number = 50
const maxRate: number = 80
var oldCost: number

import products from './products.json'

function getRate() {
  for(let item in products.Value.Goods){
    if (product[item].cost) {
      oldCost = product[item].cost
    }
    product[item] = {
      group: names[products.Value.Goods[item].G].G, 
      name: names[products.Value.Goods[item].G].B[products.Value.Goods[item].T].N, 
      cost: rate(products.Value.Goods[item].C),
      count: products.Value.Goods[item].P
    }
    if (oldCost > product[item].cost) {
      product[item].setColor = 'green'
    } else {
      product[item].setColor = 'red'
    }
  }
}

getRate()

function rand() {
  return Math.floor(Math.random() * (maxRate - minRate)) + minRate  
}

function rate(usd: number):number {
  let rub: number = usd * (rand())
  rub = Math.round(rub * 100) / 100
	return rub
}

// async function getData() {
//   const url: string = 'https://run.mocky.io/v3/71ce1e9e-3245-448d-acce-b16df3a5e3d7';
//   const response = await fetch(url)
//   if (response.ok) {
//     products = await response.json();
    
//     for(let item in products.Value.Goods){
//       product[item] = {
//         group: names[products.Value.Goods[item].G].G, 
//         name: names[products.Value.Goods[item].G].B[products.Value.Goods[item].T].N, 
//         cost: products.Value.Goods[item].C,
//         count: products.Value.Goods[item].P
//       }
//     }
//   } else {
//     console.log('Error loading')
//   }
// }

// let timerId = setInterval(getData, 15000)
// let timerId = setInterval(getRate, 20000)

export default product
