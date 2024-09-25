import { useContext } from 'react'
import Card from './Card'
import "../App.css"
import { ecomContext } from '../DataContext'
import Loader from './Loader'

const CardsContainer = () => {
    const {products,search,category,isLoading} = useContext(ecomContext);

    function filterProducts(){
      const filteredProducts = products?.filter((product) => {
          if(product.name?.toLowerCase().includes(search.toLowerCase())){
            return product
          }
      })
      // console.log(filteredProducts)
      return filteredProducts
    }

    function categorizedProducts(){
      let productsList = products?.filter((prod) => {
        if(prod.category.toLowerCase() == category.toLowerCase()){
          return prod
        }
      });
      // categorized + search filter
      if(category.toLowerCase() != "all" && search.length > 0){
        let categorizedWithSearch = productsList?.filter((ele) => {
          if(ele.name.toLowerCase().includes(search.toLowerCase())){
            return ele
          }
        })
        // console.log(categorizedWithSearch)
        return categorizedWithSearch

      } else {
        // only categorized
        // console.log(productsList)
        return productsList
      }
    }


  return (
    <div id="cards-container">

        {
          isLoading ? 
          <Loader /> : 
          <>{
          category == "all" ?
          // uncategorized Products 
          <>
         { 
            filterProducts()?.length > 0 ?  <>
            {filterProducts()?.map((ele) => {
              return <div key={ele.name}> <Card product={ele} /></div>
            })}
            </> 
            : <div><p>No Products Found</p></div>
             
         }
          </> : 
          // categorized Products
          <>
          {
            categorizedProducts()?.length > 0 ? 
            <>
            {
              categorizedProducts()?.map((ele) => {
                return <div key={ele.name}> <Card product={ele} /></div>
              })
            }
            </> 
            : <div><p>No Products Found</p></div>
            
          }
          </>
}
          </>
        }



    </div>


  )
}

export default CardsContainer