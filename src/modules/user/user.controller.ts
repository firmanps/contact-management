import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WebResponse } from 'src/common/response/web-response.interface';
import { ZodValidationPipe } from 'src/common/zod/validation.pipe';
import { CreateUserDto, CreateUserSchema } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponse } from './dto/user.response';
import { UserService } from './user.service';
import { LoginUserDto, LoginUserSchema } from './dto/login-user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body(new ZodValidationPipe(CreateUserSchema)) dto: CreateUserDto,
  ): Promise<WebResponse<UserResponse>> {
    const user = await this.userService.register(dto);
    return {
      data: UserResponse.fromEntity(user),
      message: 'Register success',
    };
  }

  @Get('/login')
  async login(
    @Body(new ZodValidationPipe(LoginUserSchema)) dto: LoginUserDto,
  ): Promise<WebResponse<CreateUserDto>> {
    await this.userService.login(dto);

    return {
      message: 'Login berhasil',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
