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
  title: "酷安",
  description: "发现科技新生活",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layoutContent}>
          <PageHeader />
          <AntdRegistry>{children}</AntdRegistry>
        </div>
      </body>
    </html>
  );
}
