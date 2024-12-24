"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function PostPage() {
  const { data: session, status } = useSession();
  const [tweetContent, setTweetContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postTweet = async () => {
    if (!session || !tweetContent.trim()) {
      setError("Please sign in and enter tweet content");
      return;
    }

    setIsPosting(true);
    setError(null);

    try {
      const response = await fetch("/api/twitter/tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: tweetContent }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to post tweet");
      }

      setTweetContent("");
      // Show success message (you could add a toast notification here)
    } catch (error) {
      console.error("Error posting tweet:", error);
      setError(error instanceof Error ? error.message : "Failed to post tweet");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto p-4">
        {status === "loading" ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
          </div>
        ) : !session ? (
          <div className="flex flex-col items-center justify-center space-y-4 py-12">
            <div className="w-12 h-12">
              <svg viewBox="0 0 24 24" className="fill-current text-white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Welcome to Solonary</h1>
            <button
              onClick={() => signIn("twitter")}
              className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              <span>Sign in with X</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* User Profile */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div className="flex items-center space-x-3">
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "Profile"}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div className="font-bold">{session.user?.name}</div>
                  <div className="text-gray-500">
                    @{session.user?.name?.toLowerCase().replace(/\s+/g, "")}
                  </div>
                </div>
              </div>
              <button
                onClick={() => signOut()}
                className="text-gray-400 hover:text-red-500 text-sm"
              >
                Sign out
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded">
                {error}
              </div>
            )}

            {/* Tweet Composition */}
            <div className="space-y-4">
              <textarea
                value={tweetContent}
                onChange={(e) => setTweetContent(e.target.value)}
                placeholder="What's happening?"
                className="w-full bg-transparent border-none focus:ring-0 text-xl resize-none h-32"
                maxLength={280}
              />

              <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                <div className="flex items-center space-x-4 text-blue-400">
                  <button className="hover:bg-blue-900/30 p-2 rounded-full">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                    </svg>
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">
                    {280 - tweetContent.length} characters remaining
                  </span>
                  <button
                    onClick={postTweet}
                    disabled={isPosting || !tweetContent.trim()}
                    className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 px-4 py-2 rounded-full font-bold transition"
                  >
                    {isPosting ? "Posting..." : "Post"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
