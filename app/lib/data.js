import { User } from "./models";

export const fetchUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
