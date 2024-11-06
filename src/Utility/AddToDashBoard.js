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


const removeStoredList = (id) => {
    const storedList = getStoredAddList();
    const upDateStoredList = storedList.filter(item => item.toString() !== id.toString());

    const updateStoredListString = JSON.stringify(upDateStoredList);
    localStorage.setItem('read-list', updateStoredListString);
    
    console.log(id, 'is removed from LS');
    console.log(storedList)
}







 


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



const removeWishList = (id) => {
    const storedList = getStoredForWishList();
    const upDateStoredList = storedList.filter(item => item.toString() !== id.toString());

    const updateStoredListString = JSON.stringify(upDateStoredList);
    localStorage.setItem('wish-list', updateStoredListString);
    
    console.log(id, 'is removed from wishList LS');
    console.log(storedList)
}






export { addToStoredDashboardList, getStoredAddList, getStoredForWishList, addToWishListdDashboardList, removeStoredList, removeWishList }