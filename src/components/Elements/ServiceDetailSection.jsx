import React, { useMemo } from 'react';

const containerTextStyle = {
    fontSize: '16px',
    lineHeight: '1.9',
    color: '#4b5563',
};

const includeCardOuterStyle = {
    transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
};

const includeCardStyle = {
    borderRadius: '14px',
    border: '1px solid #e5e7eb',
    padding: '18px 18px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '96px',
};

const includeTextStyle = {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#111827',
};

const callToActionStyle = {
    marginTop: '28px',
    paddingTop: '16px',
    borderTop: '1px dashed #e5e7eb',
};

const callToActionTextStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
};

function IncludeCard({ text }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 m-b20" style={includeCardOuterStyle}>
            <div className="include-card h-100" style={includeCardStyle}>
                <div style={includeTextStyle}>{text}</div>
            </div>
        </div>
    );
}

export default function ServiceDetailSection({ title, description, includes, callToAction }) {
    const includesList = useMemo(() => {
        if (!includes) return [];
        if (Array.isArray(includes)) {
            return includes.map(item => String(item).trim()).filter(Boolean);
        }
        return String(includes)
            .split('•')
            .map(item => item.trim())
            .filter(Boolean);
    }, [includes]);

    return (
        <div className="section-full mobile-page-padding p-t80 p-b50" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div
                            className="service-detail-content"
                            style={{
                                borderRadius: '20px',
                                backgroundColor: '#ffffff',
                                boxShadow: '0 18px 45px rgba(15, 23, 42, 0.07)',
                                padding: '36px 32px',
                            }}
                        >
                            <div className="service-detail-card">
                                <h3
                                    className="m-b20"
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: 700,
                                        color: '#0f172a',
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    {title}
                                </h3>
                                <p className="m-b30" style={containerTextStyle}>
                                    {description}
                                </p>
                                {includesList.length > 0 && (
                                    <div className="m-b30">
                                        <div className="row includes-list">
                                            {includesList.map((item, index) => (
                                                <IncludeCard key={index} text={item} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {callToAction && (
                                    <div className="call-to-action" style={callToActionStyle}>
                                        <p style={callToActionTextStyle}>
                                            {callToAction}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
