import ThemeProvider from "@/components/themeProvider";
//third-party providers
export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
