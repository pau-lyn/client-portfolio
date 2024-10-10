// pdfFiles.ts

// Define the PdfFile interface
export interface PdfFile {
    title: string;
    content: string;
    pdfLink: string;
    imageSrc: string;
    category: string;
  }
  
  // Create the pdfFiles array
  export const pdfFiles: PdfFile[] = [
    {
      title: "Document 1",
      content: "Faculty Evaluation System",
      pdfLink: "https://drive.google.com/file/d/1yKLbyC0TeL-kTzZpZxnGeavz0YEeKhn1/view?usp=sharing", 
      imageSrc: "https://via.placeholder.com/250", 
      category: "console-based",
    },
    {
      title: "Document 2",
      content: "Banking System",
      pdfLink: "https://drive.google.com/file/d/1iq-8FkyMPO2SYI0Ip9HmAA_YXRQoEkOe/view?usp=sharing",
      imageSrc: "https://via.placeholder.com/250",
      category: "console-based",
    },
    {
        title: "Document 2",
        content: "Banking System",
        pdfLink: "https://drive.google.com/file/d/1iq-8FkyMPO2SYI0Ip9HmAA_YXRQoEkOe/view?usp=sharing",
        imageSrc: "https://via.placeholder.com/250",
        category: "web-dev",
    },
    {
        title: "Document 2",
        content: "Banking System",
        pdfLink: "https://drive.google.com/file/d/1iq-8FkyMPO2SYI0Ip9HmAA_YXRQoEkOe/view?usp=sharing",
        imageSrc: "https://via.placeholder.com/250",
        category: "web-dev",
    },
    {
        title: "Document 2",
        content: "Banking System",
        pdfLink: "https://drive.google.com/file/d/1iq-8FkyMPO2SYI0Ip9HmAA_YXRQoEkOe/view?usp=sharing",
        imageSrc: "https://via.placeholder.com/250",
        category: "web-dev",
    },

  ];
  