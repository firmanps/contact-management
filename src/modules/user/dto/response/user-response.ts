export class RegisterResponse {
  username: string;
  name: string;

  static fromEntity(user: {
    username: string;
    name: string;
  }): RegisterResponse {
    return {
      username: user.username,
      name: user.name,
    };
  }
}
