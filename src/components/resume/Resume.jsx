import { useState, useEffect } from "react";
import resume from '@/assets/Raffick_Resume.pdf'

export default function Resume() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        setIsMobile(mobileCheck);
    }, []);

    return (
        <div style={{ width: '100%', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
            {!isMobile ? (
                <div>
                    <h2>My Resume</h2>
                    <iframe
                        src={resume}
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