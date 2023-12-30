import React from "react";
import { Document, Page } from "react-pdf";

export const PDFViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
