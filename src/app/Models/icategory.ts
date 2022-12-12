export interface Data {
    success: boolean;
    message: string;
    data:    DataClass;
}

export interface DataClass {
    categories: ICategory[];
}

export interface ICategory {
    id:     number;
    name:   string;
    brands: any[];
}
