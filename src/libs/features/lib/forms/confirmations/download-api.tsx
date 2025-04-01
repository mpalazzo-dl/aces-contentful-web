"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { RouteDirectory } from "@maverick/types";
import { Container, FlexBox, H4, Link, Text } from "@maverick/ui";

interface ConfirmationDownloadProps {
  t: any;
}

export const ConfirmationDownload = ({ t }: ConfirmationDownloadProps) => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    if (slug && !downloadStarted) {
      const downloadUrl = `/api/pdf/${slug}`;
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${slug}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setDownloadStarted(true);
    }
  }, [slug, downloadStarted]);

  return (
    <Container>
      <FlexBox flexDirection={"column"} alignItems={"center"} marginY={12}>
        <H4>{t.forms.thankYou.downloadStarted}</H4>
        <Text marginTop={4}>
          {t.forms.thankYou.ifNotStarted}{" "}
          <Link href={`/api/pdf/${slug}`} target="_blank">
            {t.forms.thankYou.clickHere}
          </Link>
        </Text>
        <Text>
          <Link
            href={RouteDirectory.Homepage}
            style={{ textDecoration: "underline", color: "primary.main" }}
          >
            {t.forms.thankYou.backHome}
          </Link>
        </Text>
      </FlexBox>
    </Container>
  );
};
