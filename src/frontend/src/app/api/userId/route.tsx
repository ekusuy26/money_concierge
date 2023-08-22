import { NextResponse } from "next/server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/authOptions";

export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  return NextResponse.json({ userId: userId });
}
