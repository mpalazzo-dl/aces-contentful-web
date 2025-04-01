import { NextRequest, NextResponse } from "next/server";
import { gql } from "@apollo/client";

import { cfClient } from "@maverick/contentful";

const PdfQuery = gql`
  query ($slug: String!) {
    pdfCollection(where: { slug: $slug }) {
      items {
        pdfFile {
          url
        }
      }
    }
  }
`;

const fetchPdfData = async (slug: string) => {
  try {
    const pageResponse = await cfClient.query({
      query: PdfQuery,
      variables: { slug },
    });

    return pageResponse.data.pdfCollection.items;
  } catch (error) {
    console.error("Error fetching PDF document:", error);
    return [];
  }
};

export async function GET(request: NextRequest) {
  const urlParts = request.nextUrl.pathname.split("/");
  const slug = urlParts[urlParts.length - 1];

  if (!slug) {
    return new NextResponse("Missing slug parameter", { status: 400 });
  }

  const pageData = await fetchPdfData(slug);

  if (!pageData.length || !pageData[0].pdfFile?.url) {
    return new NextResponse("Invalid PDF Document", { status: 404 });
  }

  try {
    const pdfUrl = pageData[0].pdfFile.url;
    const response = await fetch(pdfUrl);

    if (!response.ok) {
      return new NextResponse("Failed to fetch PDF", { status: 500 });
    }

    const pdfBuffer = await response.arrayBuffer();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${slug}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error fetching the PDF:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
