import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
    
    @IsNotEmpty()
    @MaxLength(100)
    @IsString()
    @Matches(/^[a-zA-Z0-9_-]+$/, {message:  'Hanya boleh huruf, angka, underscore (_), dan dash (-)'})
    username: string

    @IsNotEmpty()
    @MaxLength(100)
    @MinLength(8, {message: 'minimal 8 karakter'})
    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
        message: 'Password harus mengandung huruf dan angka',
      })      
    password: string

    @IsNotEmpty()
    @MaxLength(100)
    @IsString()
    @Matches(/^[a-zA-Z0-9_-]+$/, {message:  'Hanya boleh huruf, angka, underscore (_), dan dash (-)'})
    name: string
}