
import {fetchUser, userSlice} from "./store/slice/user";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "./store/slice/product";




const App = () =>{
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user)
    const {product} = useSelector(state => state.product)
    const getUserHandler = async () => {
        dispatch(fetchUser(2))
    }

    const getProductHandler = async () => {
        dispatch(fetchProduct(2))
    }
    return (
        <>
            <h2>Redux ToolKit</h2>
            <button onClick={getUserHandler}>getUser</button>
            <button onClick={getProductHandler}>getProduct</button>


            <pre>
            {JSON.stringify(user, null, 2)}
            </pre><pre>
            {JSON.stringify(product, null, 2)}
            </pre>
        </>
    )
}

export default App