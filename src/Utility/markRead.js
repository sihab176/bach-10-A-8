
const getItemsFromLocalStorage=()=>{
    const stringfyItem=localStorage.getItem('makeRead')
    if(stringfyItem){
        const strData=JSON.parse(stringfyItem)
        return strData
    }
    else{
        return [];
    }
}


const saveToLocalStroage=(id)=>{
    const cartSringify=JSON.stringify(id)
    localStorage.setItem("makeRead",cartSringify)
}


const addItemsToLocalStorage=(id)=>{
    const itemsStr=getItemsFromLocalStorage()
    console.log(itemsStr)
    if(itemsStr.includes(id)){
        alert('you already added the products')
    }
    else{
        itemsStr.push(id)
        // const data=JSON.stringify(itemsStr)
        // localStorage.setItem('makeRead',data)
        saveToLocalStroage(itemsStr)
    }
}

const removeFromLocalStorage=(id)=>{
    const storedCord=getItemsFromLocalStorage()
    const remainingCard=storedCord.filter(storedId=>storedId !=id)
    saveToLocalStroage(remainingCard)
}

export {addItemsToLocalStorage,getItemsFromLocalStorage ,removeFromLocalStorage}