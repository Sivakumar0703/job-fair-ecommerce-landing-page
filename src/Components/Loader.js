
import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ecomContext } from "../DataContext";

const Loader = () => {

   const{isLoading} = useContext(ecomContext);

  return (
    <div style={{textAlign:"center"}}>
        <ClipLoader
        color="black"
        loading={isLoading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader