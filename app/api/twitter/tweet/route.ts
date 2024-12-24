import { NextResponse } from "next/server";
import { TwitterApi } from "twitter-api-v2";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/auth";
import type { Session } from "next-auth";

export async function POST(request: Request) {
  try {
    const session = (await getServerSession(authOptions)) as Session;
    if (!session?.accessToken) {
      return NextResponse.json(
        { error: "Please sign in to post tweets" },
        { status: 401 }
      );
    }

    const { content } = await request.json();
    if (!content) {
      return NextResponse.json(
        { error: "No content provided" },
        { status: 400 }
      );
    }

    try {
      // Initialize Twitter client with OAuth 2.0 token
      const userClient = new TwitterApi(session.accessToken);

      // Post the tweet using v2 API
      const tweet = await userClient.v2.tweet(content);
      return NextResponse.json({ success: true, tweet });
    } catch (twitterError: any) {
      console.error("Twitter API Error:", twitterError);

      if (twitterError.code === 403) {
        return NextResponse.json(
          {
            error:
              "Not authorized to post tweets. Please check app permissions.",
          },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { error: "Failed to post tweet" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
