import BookCardProps from "../BookCard/props"

export default interface BasketCardProps {
    item:Items
}
interface Items {
    title:string;
    image:string;
    price:string;
    author:string;
    id?:number
    quantity:number
}