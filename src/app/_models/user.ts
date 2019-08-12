﻿import { Role } from "./role";

export class User {
    id: string;
    profile: string;
    name: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    token?: string;
    roles: [];
}