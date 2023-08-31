"use client";

import { useUser } from "@clerk/nextjs";

export const UserGreeting = () => {
  const { user } = useUser();

  return <div>Hello {user?.fullName}!</div>;
};
