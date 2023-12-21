// module css declariton 
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
