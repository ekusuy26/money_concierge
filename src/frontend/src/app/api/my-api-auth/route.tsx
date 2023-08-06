import { NextResponse } from "next/server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/authOptions";

export async function GET() {
  const session = await getServerSession(authOptions); // セッション情報を取得

  return NextResponse.json({ message: "ok",session:session });
}
