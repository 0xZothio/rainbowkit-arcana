import { AuthProvider } from '@arcana/auth'
import { ArcanaConnector } from '@arcana/auth-wagmi'

let auth = new AuthProvider('xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063') //temp key from docs

export const ArcanaRainbowConnector = ({ chains }) => {
    return {
        id: 'arcana-auth',
        name: 'Login with Email/Social',
        iconUrl: '',
        iconBackground: '#101010',
        createConnector: () => {
            const connector = new ArcanaConnector({
                chains,
                options: {
                    auth
                }
            })
            return {
                connector
            }
        }
    }
}
