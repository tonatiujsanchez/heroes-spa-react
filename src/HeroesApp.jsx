import { AuthProvider } from "./auth/context"
import { AppRouter } from "./router"

const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}

export default HeroesApp