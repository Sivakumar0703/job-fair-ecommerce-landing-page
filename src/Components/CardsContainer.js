import { useContext , useState } from 'react'
import Card from './Card'
import "../App.css"
import { ecomContext } from '../DataContext'
import Loader from './Loader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp  } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react'

const CardsContainer = () => {
    const {products,search,category,isLoading} = useContext(ecomContext);
    const[flag , setFlag] = useState(false);

    function filterProducts(){
      const filteredProducts = products?.filter((product) => {
          if(product.name?.toLowerCase().includes(search.toLowerCase())){
            return product
          }
      })
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
        return categorizedWithSearch

      } else {
        // only categorized
        return productsList
      }
    }

    useEffect(() => {
        const scrollFunction = () => {
          setFlag(window.scrollY > 500)
        }

        window.addEventListener("scroll" , scrollFunction);

        return () => {
          window.removeEventListener("scroll" , scrollFunction)
        }
    } , [])


    function goToTop(){
      window.scrollTo({top:0 , behavior:"smooth"})   
    }


  return (
    <>
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
          {
            flag && <div id="back2top" onClick={goToTop}> 
            <span><FontAwesomeIcon icon={faCircleUp} /></span>
            </div> 

          }
    </>

  )
}

export default CardsContainer