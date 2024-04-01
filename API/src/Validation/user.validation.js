const zod = require("zod");

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(3).max(20),
  firstname: zod.string().min(1),
  lastname: zod.string().min(1),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(3).max(20),
});

const userSignInValidation = ({ username, password }) => {
  const validation = signinSchema.safeParse({ username, password });
  return validation.success;
};

const userSignUpValidation = ({
  username,
  password,
  firstname,
  lastname,
}) => {
  const validation = signupSchema.safeParse({
    username,
    password,
    firstname,
    lastname,
  });
  return validation.success;
};

module.exports ={
  userSignInValidation,
  userSignUpValidation
}