export interface IProduct {

    id:number ,
    name:string,
    price:number,
    quantity:number,
    imgUrl?:any ;
    Count?: any;
    catId:number
}

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
