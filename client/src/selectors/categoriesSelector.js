export const findCategory=(categories,id)=>{
    return categories.find(category=>category._id==id)
}