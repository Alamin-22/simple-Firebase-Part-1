import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../Firebase/firebase.init";



const LogIn = () => {

    const [userData, setUserData] = useState(null);
    // console.log(userData)
    const Auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();

    const handleLogIn = () => {
        signInWithPopup(Auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUserData(user)
            })
            .catch(error => {
                console.log(error)
            })

    }


    const handleLogOut = () => {
        signOut(Auth)
            .then(result => {
                console.log(result)
                setUserData(null)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGitHubSingIn=()=>{
        signInWithPopup(Auth, GitHubProvider)
        .then(result=>{
           const LoggedInUser = result.user;
           console.log(LoggedInUser); 
           setUserData(LoggedInUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <div>
            {
                userData ? <button onClick={handleLogOut} className="btn rounded-full btn-primary">LogOut</button>
                    :
                    <>
                        <button onClick={handleLogIn} className="btn rounded-full btn-primary"> Google Login</button>
                        <button onClick={handleGitHubSingIn} className="btn rounded-full btn-primary">GitHub LogIn</button>
                    </>
            }
            <div>
                {/* I have to use conditional rendering. Because its can not find the initial value. so I have to do is  set a object as a default useState vale or i can us conditional rendering */}
                <h1>{userData?.displayName}</h1>
                <p>{userData?.email}</p>
                <img src={userData?.photoURL} className="mx-auto my-4" />
            </div>
        </div>
    );
};

export default LogIn;