export interface CreateUserDto {
  identification: string
  email: string
  password: string
  name?: string
  lastName?: string
  avatar?: number
}
