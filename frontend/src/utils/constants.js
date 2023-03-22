const HOST_LOCAL = "http://localhost:1337"
const HOST_DEV = "http:// à remplacer par le serveur de dev"
const HOST_PROD = "http:// à remplacer par le serveur de prod"

function getHost() {
    if (process.env.REACT_APP_ENV === "dev") {
        if (process.env.REACT_APP_ENV_LOCAL === "true") {
            return HOST_LOCAL
        }
        return HOST_DEV
    }
    return HOST_PROD
}

export const HOST = getHost()

