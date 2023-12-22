export default interface ButtonProps {
    title:string;
    type?:"submit" | "button";
    onClick?:(e:any) => void
    bgColor?:"orange"|"#2B3A42"
    disabled?:boolean
}