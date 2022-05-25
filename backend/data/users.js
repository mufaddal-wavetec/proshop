import bcrypt from "bcryptjs";

const users = [
  {
    name: "Mufaddal Jamali",
    email: "mufaddal@jamali.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Yahya Jamali",
    email: "yahya@jamali.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Huzefa Jamali",
    email: "huzefa@jamali.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
