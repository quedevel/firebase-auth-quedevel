import {
    Auth,
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
    GithubAuthProvider
} from "firebase/auth"

class AuthService {
    private firebaseAuth: Auth;
    private googleAuthProvider: GoogleAuthProvider;
    private githubAuthProvider: GithubAuthProvider;
    constructor() {
        this.firebaseAuth = getAuth();
        this.googleAuthProvider = new GoogleAuthProvider();
        this.githubAuthProvider = new GithubAuthProvider();
    }

    login(providerName: string){
        const provider = this.getProvider(providerName);
        signInWithRedirect(this.firebaseAuth, provider)
            .then(result => console.log(result))
    }

    getProvider(providerName: string){
        switch(providerName){
            case "google": return this.googleAuthProvider
            case "github": return this.githubAuthProvider
            default: throw new Error(`${providerName}는 지원하지 않는 프로바이더입니다.`)
        }
    }
}

export default AuthService