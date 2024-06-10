import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/app/component/Footer";
import SideBar from "@/app/component/SideBar";
import Header from "@/app/component/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
            <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, minimal-ui, viewport-fit=cover"/>
            <meta name="theme-color" content="#2196f3"/>
            <meta name="author" content="DexignZone" /> 
            <meta name="keywords" content="" /> 
            <meta name="robots" content="" /> 
            <meta name="description" content="Soziety - Social Network Mobile App Template ( Bootstrap 5 + PWA )"/>
            <meta property="og:title" content="Soziety - Social Network Mobile App Template ( Bootstrap 5 + PWA )" />
            <meta property="og:description" content="Soziety - Social Network Mobile App Template ( Bootstrap 5 + PWA )" />
            <meta property="og:image" content="https://soziety.dexignzone.com/xhtml/social-image.png"/>
            <meta name="format-detection" content="telephone=no"/>

            <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />

            <title>Soziety - Social Network Mobile App Template ( Bootstrap 5 + PWA )</title>

            <link rel="manifest" href="/manifest.json"/>

            <link rel="stylesheet" href="assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css"/>
            <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css"/>
            <link rel="stylesheet" type="text/css" href="assets/css/style.css"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

        </head>   
      <body className={inter.className}>
        <Header />
		    <SideBar />
        <div className="content-body">
          {children}
        </div>
        <Footer />

        {/* <AddToHomeScreenButton/> */}

        <script src="assets/js/jquery.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/dz.carousel.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/js/settings.js"></script>
        <script src="assets/js/custom.js"></script>
      </body>
    </html>
  );
}
