'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function GoogleAnalytics() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !GA_MEASUREMENT_ID || typeof window.gtag === 'undefined') return

    // Track page view with current URL - no need for useSearchParams
    const url = window.location.pathname + window.location.search
    
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [isClient])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Utility functions for manual tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
  
  if (window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackPageView = (url?: string) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
  
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url || window.location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    })
  }
} 