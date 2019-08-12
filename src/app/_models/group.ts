import { User } from "./user";

export class Group {
    id: number;
    name: string;
    description: string;
    status: string;
    roles: string;
    members: User[];
}