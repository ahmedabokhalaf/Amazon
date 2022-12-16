import { IProduct } from "./iproduct";

export interface Data {
    success: boolean;
    message: string;
    data:    DataClass;
}

export interface DataClass {
    brands: IBrand[];
    brand: IBrand;

}


export interface IBrand {
Name: string;
Id: number;
CatId:number;
 
 
}
