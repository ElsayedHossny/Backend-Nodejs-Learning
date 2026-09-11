import User from "../../DB/models/user.model.js";

export const signUp = async (body) => {
  const { firstName, lastName, email, age, gender } = body;

  const isUserExist = await User.findOne({ where: { email } });
  if (isUserExist) throw new Error("User is Already Exist");

  return User.create({ firstName, lastName, email, age, gender });
};

export const findOrCreate = async (body) => {
  const { firstName, lastName, email, age, gender } = body;

  const isUserExist = await User.findOrCreate({
    where: { email },
    defaults: { firstName, lastName, email, age, gender },
  });
  if (!isUserExist[-1]) throw new Error("User is Already Exist");

  console.log(isUserExist[-1]);

  return isUserExist;
};

export const signIn = async (body) => {
  const { email } = body;

  const isUserExist = await User.findOne({ where: { email } });
  if (!isUserExist) throw new Error("User not Exist");
  return isUserExist;
};

export const listUsers = async () => {
  const listusers = await User.findAll({
    attributes: [
      "id",
      "firstName",
      "lastName",
      "fullName",
      ["email", "EmailAdress"],
      "age",
      "gender",
    ],
  });
  return listusers;
};

export const listUsersByPagenation = async (inputs) => {
  // to make pagenation i should have page and limit From frontend. and offset (skip) equation
  // handel 3 things 1-if not receive page, limit  2- if page, limit is negative/0 3- if page, limit is float

  // handel 1-if not receive page => by default
  let { page = 1, limit = 5 } = inputs;

  // 2- if page, limit is negative/0
  if (page <= 0) page = 1;
  if (limit <= 0) limit = 5;

  // 3- if page, limit is float
  page = Math.ceil(page);
  limit = Math.ceil(limit);

  // 4 - offset (skip) equation

  const offset = (page - 1) * limit;

  const listusers = await User.findAndCountAll({
    limit,
    offset,
    attributes: [
      "id",
      "firstName",
      "lastName",
      "fullName",
      ["email", "EmailAdress"],
      "age",
      "gender",
    ],
  });
  console.log(listusers);

  return { count: listusers.count, users: listusers.rows, page, limit, offset };
};

export const userById = async (id) => {
  const result = await User.findByPk(id, {
    attributes: [
      "firstName",
      "lastName",
      ["email", "Email Adress"],
      "age",
      "gender",
    ],
  });
  if (!result) throw new Error("user not found");
  return result;
};
