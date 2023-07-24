import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: "Users",
};

export default function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  return <div>page</div>;
}

// create a library function to get users
