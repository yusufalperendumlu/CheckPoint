export interface IPathType {
    path: string;
    label?: string;
    base?: string;
}
export interface IPathTypeWithId extends IPathType {
    id: number;
}
export interface IPathTypeWithIdAndActive extends IPathTypeWithId {
    active: boolean;
}
