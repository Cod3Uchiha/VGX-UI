import { NextResponse } from "next/server"
import { siteConfig, getApiStatus } from "@/settings/config"

export async function GET(request) {
  const apiStatus = getApiStatus("/ai/gpt5")

  if (apiStatus.status === "offline") {
    return new NextResponse(
      JSON.stringify(
        {
          status: false,
          creator: siteConfig.api.creator,
          error: "This API endpoint is currently offline and unavailable. Please try again later.",
          endpoint: "/ai/gpt5",
          apiStatus: "offline",
          version: "v1",
        },
        null,
        2
      ),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
  }

  if (siteConfig.maintenance.enabled) {
    return new NextResponse(
      JSON.stringify(
        {
          status: siteConfig.maintenance.apiResponse.status,
          creator: siteConfig.api.creator,
          message: siteConfig.maintenance.apiResponse.message,
        },
        null,
        2
      ),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
  }

  const { searchParams } = new URL(request.url)
  const text = searchParams.get("text")

  if (!text) {
    return NextResponse.json(
      {
        status: false,
        creator: siteConfig.api.creator,
        error: "Text is required",
      },
      {
        status: 400,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
  }

  try {
    const response = await fetch(`https://iamtkm.vercel.app/ai/gpt5?apikey=tkm&text=${encodeURIComponent(text)}`)
    const data = await response.json()

    return NextResponse.json(
      {
        status: true,
        creator: siteConfig.api.creator,
        endpoint: "/ai/gpt5",
        result: data,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        creator: siteConfig.api.creator,
        error: "Internal Server Error",
        message: error.message,
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
  }
}
