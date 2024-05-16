export interface IUser {
    id: number,
    avatar: string,
    email: string,
    first_name: string,
    last_name:string

}
export interface IUsersTable {
    data: IUser[],
    total: number,
    total_pages: number,
    page: number,
    per_page: number
}
