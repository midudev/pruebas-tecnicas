/// <reference types="vite/client" />
declare module "*.css";
declare module "*.svg" {
  const src: string;
  export default src;
}
