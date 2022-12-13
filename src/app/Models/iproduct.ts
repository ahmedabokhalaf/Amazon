export interface Data {
    success: boolean;
    message: string;
    data:    DataClass;
}

export interface DataClass {
    products: IProduct[];
    product: IProduct;

}


export interface IProduct {
    id:number ,
    name:string,
    price:number,
    quantity:number,
    description:string ,
    brandId:number ,
    productImages: ProductImage[]; 
}
export interface ProductImage {
    id:        number;
    path:      string;
    productId: number;
}

