export class UserResponse {
  username: string;
  name: string;

  static fromEntity(user: { username: string; name: string }): UserResponse {
    return {
      username: user.username,
      name: user.name,
    };
  }
}
