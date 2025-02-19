import {  Tool, User } from "@/types/alat";

export interface LoginResponse {
    success: boolean;
    message: string;
    data: User[];
    accesstoken: string;
    kadaluarsa: string;
    refreshtoken: string;
    kadaluarsaRefresh: string;
}

export interface RegisterResponse {
    success: boolean;
    message: string;
    data: User[];
}

export interface ForgotPasswordResponse {
    token: string;
}

export interface GetToolsResponse {
    success: boolean;
    message: string;
    data: Tool[];
}

