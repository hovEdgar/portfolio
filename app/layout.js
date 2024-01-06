import './styles/globals.scss';
import { Inter } from 'next/font/google';
import {Providers} from "@/app/store/Providers";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hovsepyan',
  description: 'Personal portfolio of Edgar Hovsepyan',
  icons: {
    icon: 'assets/icons/fav-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
};
