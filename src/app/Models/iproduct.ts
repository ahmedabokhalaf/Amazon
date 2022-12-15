 

export interface Data {
    success: boolean;
    message: string;
    data:    DataClass;
}

export interface DataClass {
    products: IProduct[];
}

export interface IProduct {
    Id:number ,
    Name:string,
    Price:number,
    Quantity:number,
    Description:string ,
    BrandId:number ,
    ProductImages: any[];
 
}
