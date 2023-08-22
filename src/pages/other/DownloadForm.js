import React from 'react';
import { Button } from 'react-bootstrap';
import "./../other/ReturnPolicy.css";

const DownloadForm = ({ filename, fileUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    link.click();
  };

  return (
    <Button className="Returnhover" variant='dark' style={{width:'70%'}}  onClick={handleDownload}>Download Form</Button>
  );
};

export default DownloadForm;
