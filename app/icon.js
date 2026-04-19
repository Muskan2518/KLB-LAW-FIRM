import { ImageResponse } from 'next/og'

// Square KLB favicon — black background, orange serif "KLB" with a thin underline.
// Renders crisp at every size browsers ask for.
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#0F0A07',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: '#EB7C3A',
                    fontFamily: 'serif',
                    fontWeight: 700,
                    letterSpacing: 1,
                }}
            >
                <div style={{ fontSize: 32, lineHeight: 1, color: '#fff' }}>KLB</div>
                <div
                    style={{
                        width: 28,
                        height: 3,
                        background: '#EB7C3A',
                        marginTop: 4,
                        borderRadius: 2,
                    }}
                />
            </div>
        ),
        { ...size }
    )
}
