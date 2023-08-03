import { useLocation } from 'react-router-dom';
import Header from './Homepage/Header';
function SearchPage(){
const location = useLocation();
const { userId } = location.state;
    console.log(userId)
   return(
    <div>
        <Header/>
        <h2>{userId} </h2>
    </div>
   )
}
export default SearchPage;