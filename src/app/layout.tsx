import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import PageHeader from '../components/Layout/PageHeader';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './layout.module.scss';
import "./reset.global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GEELY吉利汽车",
  description: "GEELY吉利汽车-造每个人的智能精品车 -吉利汽车官方网站",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
      {/* <body className={inter.className}> */}
        <div className={styles.layoutContent}>
          <PageHeader />
          <AntdRegistry>{children}</AntdRegistry>
        </div>
      </body>
    </html>
  );
}
