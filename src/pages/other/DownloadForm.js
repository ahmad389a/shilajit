import React from 'react';
import { Button } from 'react-bootstrap';
import "./../other/ReturnPolicy.css";
import { useTranslation } from "react-i18next";

const DownloadForm = ({ filename, fileUrl }) => {
  const { t } = useTranslation();
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    link.click();
  };

  return (
    <Button className="Returnhover" variant='dark' style={{width:'80%'}}  onClick={handleDownload}>{t("Download Form")}</Button>
  );
};

export default DownloadForm;
