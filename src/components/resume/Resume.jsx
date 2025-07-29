import { useState, useEffect } from "react";

export default function Resume() {
    const [isMobile, setIsMobile] = useState(false);
    // const [showDownload, setShowDownload] = useState(false);

    useEffect(() => {
        // Check if device is mobile
        const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        setIsMobile(mobileCheck);

        // Set timeout to show download option if iframe doesn't load
        // const timer = setTimeout(() => {
        //     setShowDownload(true);
        // }, 3000);

        // return () => clearTimeout(timer);
    }, []);

    // const handleIframeError = () => {
    //     setShowDownload(true);
    // };

    return (
        <div style={{ width: '100%', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
            {!isMobile ? (
                <div>
                    <h2>My Resume</h2>
                    <iframe
                        src="/Raffick_Resume.pdf"
                        width="85%"
                        height="1000px"
                        title="PDF Viewer"
                    />
                </div>
            ) : null}

            {
                <div style={{
                    textAlign: 'center',
                    padding: '20px',
                    // border: '1px solid #ddd',
                    borderRadius: '4px',
                    marginTop: '20px'
                }}>
                    <a
                        href="/Raffick_Resume.pdf"
                        download="Raffick_Resume.pdf"
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            marginTop: '10px'
                        }}
                    >
                        Download Resume (PDF)
                    </a>
                    <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                        {isMobile
                            ? "Mobile devices may have trouble displaying PDFs directly. Click above to download."
                            : "Click above to download."
                        }
                    </p>
                </div>
            }
        </div>
    );
}