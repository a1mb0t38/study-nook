import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={true}>
            {children}
        </ThemeProvider>
    )
}