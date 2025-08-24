export const siteConfig = {
  name: "VGX REST API's",
  description: "Powerful, reliable, and easy-to-use REST API services for developers",
  version: "3.1.0",
  status: "online",
  copyright: "© 2025 VGX REST API's. All rights reserved.",

  maintenance: {
    enabled: false,
    title: "Website Under Maintenance",
    message: "We're currently upgrading our systems to serve you better. Please check back in a few hours.",
    showHomeLink: false,
    gifUrl: "https://raw.githubusercontent.com/vgxurl/xyz/refs/heads/main/public/maintenance.gif",
    apiResponse: {
      status: false,
      message: "Our API services are currently undergoing scheduled maintenance.",
    },
  },

  notFound: {
    title: "404 - Page Not Found",
    message: "Oops! The page you're looking for doesn't exist. The anime girl is just as confused as you are.",
    gifUrl: "https://raw.githubusercontent.com/vgxurl/xyz/refs/heads/main/public/404.gif",
  },

  logo: {
    src: "https://raw.githubusercontent.com/vgxurl/xyz/refs/heads/main/logo.jpg",
    width: 40,
    height: 40,
    alt: "VGX REST API's",
    autoInvert: true,
  },

  background: {
    type: "default",
    value: "",
    responsive: {
      mobile: true,
      fallbackColor: "#121212",
    },
  },

  api: {
    baseUrl: "example.com",
    creator: "VGX Team",
    versions: ["v1", "v2"],
    defaultVersion: "v2",
    rateLimit: {
      limit: 500,
      window: "2 hours",
      windowMs: 2 * 60 * 60 * 1000,
      resetTimeMs: 2 * 60 * 60 * 1000,
      headerPrefix: "X-RateLimit",
    },
  },

  announcements: [
    {
      id: "1",
      title: "API Rate Limit Updated",
      message: "Rate limit increased to 500 requests per 2 hours for better performance",
      type: "info",
      date: "2025-01-22",
      isNew: true,
    },
    {
      id: "2",
      title: "New AI Models Available",
      message: "Added support for more AI models in HydroMind endpoint",
      type: "success",
      date: "2025-01-20",
      isNew: true,
    },
    {
      id: "3",
      title: "Enhanced Documentation",
      message: "Improved API playground with better testing tools and examples",
      type: "success",
      date: "2025-01-22",
      isNew: true,
    },
  ],

  links: {
    github: "https://github.com/vgxurl",
    discord: "https://discord.gg/vgx",
    telegram: "https://t.me/vgxapi",
  },

  features: [
    {
      icon: "Zap",
      title: "Lightning Fast",
      description: "Optimized infrastructure ensures sub-second response times for all endpoints",
    },
    {
      icon: "Shield",
      title: "Highly Reliable",
      description: "99.9% uptime guarantee with robust error handling and failover systems",
    },
    {
      icon: "Code",
      title: "Developer Friendly",
      description: "Clean documentation, SDKs, and intuitive API design for seamless integration",
    },
    {
      icon: "Infinity",
      title: "Generous Limits",
      description: "500 requests per 2 hours with no hidden fees or surprise restrictions",
    },
    {
      icon: "Globe",
      title: "Global CDN",
      description: "Worldwide edge locations ensure fast response times from anywhere",
    },
    {
      icon: "Lock",
      title: "Secure by Design",
      description: "Enterprise-grade security with encrypted connections and data protection",
    },
  ],

  statusCodes: [
    { code: 200, name: "OK", description: "Request successful" },
    { code: 400, name: "Bad Request", description: "Invalid request" },
    { code: 403, name: "Forbidden", description: "Request forbidden" },
    { code: 429, name: "Too Many Requests", description: "Rate limit exceeded" },
    { code: 500, name: "Internal Server Error", description: "Server error" },
  ],

  mediaTypes: [
    { type: "application/json", description: "JSON data format", badge: "JSON" },
    { type: "application/pdf", description: "PDF document format", badge: "PDF" },
    { type: "application/xml", description: "XML data format", badge: "XML" },
    { type: "application/zip", description: "ZIP archive format", badge: "ZIP" },
    { type: "audio/mp3", description: "MP3 audio format", badge: "MP3" },
    { type: "audio/wav", description: "WAV audio format", badge: "WAV" },
    { type: "image/gif", description: "GIF image format", badge: "GIF" },
    { type: "image/jpeg", description: "JPEG image format", badge: "JPEG" },
    { type: "image/png", description: "PNG image format", badge: "PNG" },
    { type: "image/svg+xml", description: "SVG vector format", badge: "SVG" },
    { type: "image/webp", description: "WebP image format", badge: "WEBP" },
    { type: "text/csv", description: "CSV format", badge: "CSV" },
    { type: "text/html", description: "HTML format", badge: "HTML" },
    { type: "text/plain", description: "Plain text format", badge: "TEXT" },
    { type: "video/mp4", description: "MP4 video format", badge: "MP4" },
    { type: "video/webm", description: "WebM video format", badge: "WEBM" },
    { type: "application/octet-stream", description: "Binary data format", badge: "BIN" },
  ],

  apiStatus: {
    "/ai/luminai": {
      status: "offline",
      responseTime: 250,
      uptime: 99.9,
      lastChecked: "2025-01-22T10:30:00Z",
    },
    "/ai/hydromind": {
      status: "offline",
      responseTime: 0,
      uptime: 0,
      lastChecked: "2025-01-22T10:30:00Z",
    },
    "/random/ba": {
      status: "online",
      responseTime: 180,
      uptime: 99.8,
      lastChecked: "2025-01-22T10:30:00Z",
    },
  },

  apiCategories: [
    {
      name: "AI",
      color: "blue",
      endpoints: [
        {
          method: "GET",
          path: "/ai/luminai",
          description: "Generate AI responses using LuminAI",
          mediaType: "application/json",
          parameters: [{ name: "text", type: "string", required: true, description: "Text prompt for AI" }],
          versions: ["v1", "v2"],
        },
        {
          method: "POST",
          path: "/ai/hydromind",
          description: "Generate AI responses using HydroMind",
          mediaType: "application/json",
          parameters: [
            { name: "text", type: "string", required: true, description: "Text prompt for AI" },
            { name: "model", type: "string", required: true, description: "AI model to use" },
            { name: "responses", type: "number", required: false, description: "Number of responses" },
          ],
          versions: ["v1", "v2"],
        },
      ],
    },
    {
      name: "Random",
      color: "green",
      endpoints: [
        {
          method: "GET",
          path: "/random/ba",
          description: "Get random Blue Archive image",
          mediaType: "image/png",
          parameters: [],
          versions: ["v1", "v2"],
        },
      ],
    },
  ],
}

export function getCategoryColor(category) {
  const categoryConfig = siteConfig.apiCategories.find((c) => c.name === category)

  switch (categoryConfig?.color) {
    case "blue":
      return "bg-blue-500/10 text-blue-500 border-blue-500/30"
    case "purple":
      return "bg-purple-500/10 text-purple-500 border-purple-500/30"
    case "green":
      return "bg-green-500/10 text-green-500 border-green-500/30"
    case "yellow":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
    case "red":
      return "bg-red-500/10 text-red-500 border-red-500/30"
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/30"
  }
}

export function getMethodColor(method) {
  switch (method) {
    case "GET":
      return "bg-green-500/10 text-green-500 border-green-500/30"
    case "POST":
      return "bg-blue-500/10 text-blue-500 border-blue-500/30"
    case "PUT":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
    case "DELETE":
      return "bg-red-500/10 text-red-500 border-red-500/30"
    default:
      return "bg-purple-500/10 text-purple-500 border-purple-500/30"
  }
}

export function getMediaTypeInfo(mediaType) {
  const mediaTypeConfig = siteConfig.mediaTypes.find((m) => m.type === mediaType)

  if (!mediaTypeConfig) {
    return {
      color: "bg-gray-500/10 text-gray-500 border-gray-500/30",
      badge: "DATA",
    }
  }

  switch (mediaType) {
    case "application/json":
      return {
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "application/xml":
      return {
        color: "bg-orange-500/10 text-orange-500 border-orange-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "application/pdf":
      return {
        color: "bg-red-600/10 text-red-600 border-red-600/30",
        badge: mediaTypeConfig.badge,
      }
    case "text/csv":
      return {
        color: "bg-green-600/10 text-green-600 border-green-600/30",
        badge: mediaTypeConfig.badge,
      }
    case "text/html":
      return {
        color: "bg-orange-500/10 text-orange-500 border-orange-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "text/plain":
      return {
        color: "bg-blue-500/10 text-blue-500 border-blue-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "image/png":
      return {
        color: "bg-purple-500/10 text-purple-500 border-purple-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "image/jpeg":
      return {
        color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "image/gif":
      return {
        color: "bg-pink-500/10 text-pink-500 border-pink-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "image/svg+xml":
      return {
        color: "bg-teal-500/10 text-teal-500 border-teal-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "image/webp":
      return {
        color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "audio/mp3":
      return {
        color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "audio/wav":
      return {
        color: "bg-lime-500/10 text-lime-500 border-lime-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "video/mp4":
      return {
        color: "bg-red-500/10 text-red-500 border-red-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "video/webm":
      return {
        color: "bg-rose-500/10 text-rose-500 border-rose-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "application/zip":
      return {
        color: "bg-amber-500/10 text-amber-500 border-amber-500/30",
        badge: mediaTypeConfig.badge,
      }
    case "application/octet-stream":
      return {
        color: "bg-slate-500/10 text-slate-500 border-slate-500/30",
        badge: mediaTypeConfig.badge,
      }
    default:
      return {
        color: "bg-gray-500/10 text-gray-500 border-gray-500/30",
        badge: mediaTypeConfig.badge || "DATA",
      }
  }
}

export function getStatusCodeColor(code) {
  if (code >= 200 && code < 300) return "status-200 bg-green-500/10 text-green-500 border-green-500/30"
  if (code >= 300 && code < 400) return "bg-blue-500/10 text-blue-500 border-blue-500/30"
  if (code >= 400 && code < 500) return "status-400 bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
  if (code >= 500) return "status-500 bg-red-500/10 text-red-500 border-red-500/30"
  return "bg-gray-500/10 text-gray-500 border-gray-500/30"
}

export function getApiStatus(endpoint) {
  return (
    siteConfig.apiStatus[endpoint] || {
      status: "unknown",
      responseTime: 0,
      uptime: 0,
      lastChecked: new Date().toISOString(),
    }
  )
}

export function getStatusBadgeStyle(status) {
  switch (status) {
    case "online":
      return {
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        color: "rgb(34, 197, 94)",
        borderColor: "rgba(34, 197, 94, 0.3)",
      }
    case "degraded":
      return {
        backgroundColor: "rgba(234, 179, 8, 0.1)",
        color: "rgb(234, 179, 8)",
        borderColor: "rgba(234, 179, 8, 0.3)",
      }
    case "offline":
      return {
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        color: "rgb(239, 68, 68)",
        borderColor: "rgba(239, 68, 68, 0.3)",
      }
    case "maintenance":
      return {
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        color: "rgb(59, 130, 246)",
        borderColor: "rgba(59, 130, 246, 0.3)",
      }
    default:
      return {
        backgroundColor: "rgba(148, 163, 184, 0.1)",
        color: "rgb(148, 163, 184)",
        borderColor: "rgba(148, 163, 184, 0.3)",
      }
  }
}

export function getBackgroundStyles() {
  const { type, value, responsive } = siteConfig.background
  const fallbackColor = responsive?.fallbackColor || "#121212"

  switch (type) {
    case "gradient":
      return {
        background: value,
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }
    case "image":
      return {
        backgroundColor: fallbackColor,
        backgroundImage: `url(${value})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
      }
    case "pattern":
      return {
        backgroundImage: `url(/patterns/${value || "topography"}.svg)`,
        backgroundRepeat: "repeat",
        backgroundAttachment: "scroll",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
      }
    default:
      return {
        position: "relative",
        width: "100%",
        minHeight: "100vh",
      }
  }
}

export function getOverlayStyles() {
  const { type, overlay, overlayOpacity } = siteConfig.background

  if (type === "image" && overlay) {
    return {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: `rgba(0, 0, 0, ${overlayOpacity || 0.7})`,
      zIndex: -1,
    }
  }

  return {}
}
