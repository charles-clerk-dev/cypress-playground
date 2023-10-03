import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Ensure that locale specific sign-in pages are public
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
