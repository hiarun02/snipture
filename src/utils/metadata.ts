import {Metadata} from "next";

export function generateEditorMetadata(): Metadata {
  return {
    title: "Code Snippet Editor - Snippify",
    description:
      "Free online code snippet editor with syntax highlighting, themes, and gradients. Generate beautiful code images instantly.",
    keywords:
      "code editor, syntax highlighter, snippet generator, code screenshot, code beautifier",
    openGraph: {
      type: "website",
      title: "Code Snippet Editor - Snippify",
      description:
        "Create beautiful code snippet images with professional themes",
      url: "https://www.snippify.live/editor",
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: "Snippify - Code Snippet Image Generator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Code Snippet Editor - Snippify",
      description:
        "Create beautiful code snippet images with professional themes",
      images: ["/preview.png"],
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return {
    title: "Dashboard - Snippify",
    description:
      "Explore Snippify features and start creating beautiful code snippets",
    openGraph: {
      type: "website",
      title: "Dashboard - Snippify",
      url: "https://www.snippify.live/home",
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: "Snippify - Code Snippet Image Generator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Dashboard - Snippify",
      description:
        "Explore Snippify features and start creating beautiful code snippets",
      images: ["/preview.png"],
    },
  };
}
