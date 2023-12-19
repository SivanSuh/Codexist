export default interface BookCardProps {
    item:Items
}
interface Items {
    title:string;
    image:string;
    price:string;
    author:string;
    id?:number
}