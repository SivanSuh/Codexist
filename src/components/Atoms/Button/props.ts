export default interface ButtonProps {
    title:string;
    type?:"submit" | "button";
    onClick?:(e:any) => void
}