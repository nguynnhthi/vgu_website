import '@/app/ui/global.css';
import { sans } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="soft-ui-dashboard.css" />

      </head>
      <body className={`${sans.className} antialiased`}>{children}

        {/* <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.x.x/dist/alpine.js" defer /> */}

      </body>
    </html>
  );
}