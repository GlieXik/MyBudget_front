import { NextResponse } from "next/server";

export default function middleware(req) {
  const jwt = req.cookies.get("accessToken")?.value;
  const url = req.nextUrl.clone();

  if (url.pathname === "/") {
    if (!jwt) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
