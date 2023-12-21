export default interface InputProps {
    placeholder:string;
    type?: "text" | "password" | "number"
    onChange?:(e:any) => void
}