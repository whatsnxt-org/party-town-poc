// place all script to be loaded by PartyTown
import { Partytown } from '@builder.io/partytown/react';
import Script from 'next/script';

export default function PartyTownScripts() {
  return (
    <>
      <Partytown forward={['dataLayer.push']} />
      <Script
        type="text/partytown"
        src="https://www.googletagmanager.com/gtag/js?id=G-F3NDMSG8KT"
        strategy="afterInteractive"
      />
      <Script
        type="text/partytown"
        id="GA"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F3NDMSG8KT');
          `,
        }}
      />
    </>
  );
}
