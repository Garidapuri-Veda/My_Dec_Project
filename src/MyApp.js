import { useDispatch, useSelector } from 'react-redux';
import { storeAction } from './Action';

function MyApp() {

    const dispatch = useDispatch();
    const myStoreData = useSelector((state) => state);
    console.log(myStoreData, "=================")
    const handleMyBuutton = () => {
        dispatch(storeAction)
    }

    return (
        <div>
            <p>Hey this is my Second project {myStoreData && myStoreData.myData}</p>
            <button onClick={handleMyBuutton}>Click Here To Dispatch Action</button>
        </div>
    )
}

export default MyApp;