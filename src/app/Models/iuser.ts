export interface IUser {
    userName:        string;
    email:           string;
    password:        string;
    confirmPassword: string;
    role:            string;
}
export interface Response {
    success: boolean;
    message: null;
    data:    string[];
}