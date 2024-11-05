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



export { addToStoredDashboardList, getStoredAddList }