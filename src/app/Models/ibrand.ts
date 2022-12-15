
export interface Data {
    success: boolean;
    message: string;
    data:    DataClass;
}

export interface DataClass {
    ibrands: IBrand[];
}


export interface IBrand {
Id: number;
Name: string;
CategoryId  : number;

 
 
}
