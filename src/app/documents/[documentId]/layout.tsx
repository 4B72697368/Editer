import type { Metadata } from "next";

export async function generateMetadata(
    { params }: { params: Promise<{ documentId: string }> }
): Promise<Metadata> {
    const resolvedParams = await params;

    return {
        title: `${resolvedParams.documentId} - Ad Verbum` || "Untitled Document - Ad Verbum",
        description: "The word processor made for Debaters, by Debaters.",
    };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}