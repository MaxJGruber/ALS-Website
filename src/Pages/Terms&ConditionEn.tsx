import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import * as doc from "../Content/Terms&Conditions/GTC_en_v19.3.pdf";

export function TermsAndConditionsEn() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  console.log(doc);
  return (
    <div className="flex justify-center items-center flex-col ">
      <Document file={doc.default} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
