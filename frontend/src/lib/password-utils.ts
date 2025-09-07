import bcrypt from "bcryptjs";

// salt + hash password
export function saltAndHashPassword(password: string): string {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

// compare user input password vs db password
export function compoarePassword(
  password: string,
  hasedPassword: string
): boolean {
  return bcrypt.compareSync(password, hasedPassword);
}
