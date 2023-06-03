import { NextResponse } from "next/server";

export default async function middleware(req) {
  const jwt = req.cookies.get("accessToken")?.value;

  try {
    const response = await fetch(
      "https://my-budget-back-tau.vercel.app/api/users/current",
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (response.status === 200) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    console.log(error);
  }
}
export const config = {
  matcher: ["/account/:path*", "/"],
};
