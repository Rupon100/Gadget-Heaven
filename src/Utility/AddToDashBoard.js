import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getStoredAddList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }else{
        return [];
    }
}

const addToStoredDashboardList = (id) => {
    const storedList = getStoredAddList();
    if(storedList.includes(id)){
        console.log(id, 'id already exist');
    }else {
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListString);
    }
}



// const removeStoredList = (id) => {
//     localStorage.removeItem('')
// }

const getStoredForWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }else{
        return [];
    }
}

const addToWishListdDashboardList = (id) => {
    const storedList = getStoredForWishList();
    if(storedList.includes(id)){
        console.log(id, 'you already added this to your wishList');
    }else {
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListString);
    }
}






export { addToStoredDashboardList, getStoredAddList, getStoredForWishList, addToWishListdDashboardList }