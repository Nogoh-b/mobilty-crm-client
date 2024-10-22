"use client"
import Input from "../../../component/ui/Input";
import Button from "../../../component/ui/Button";

export default function Login() {

    


  return (
      <>
          <div className="container vh-100">
            <div className="welcome-area">
              <div className="bg-image bg-image-overlay" style={{backgroundImage: 'assets/images/login/pic4.jpg'}}></div>
              <div className="join-area">
                <div className="started">
                  <h1 className="title">Connexion</h1>
                  <p>Connextez vous pour avoir accès à la plateforme</p>
                </div>
                <form>

                  <Input iconName="user" iconSize={14} inputSize="" iconType="fa"  type="text" placeHolder="Mail"  inputStyle="GroupIcon" />
                  <Input iconName="lock" iconType="fa"  inputSize="" type="password" placeHolder="Mot de passe" hasRightIcon inputStyle="GroupIcon" />


                </form>
                <a href="forgot-password.html" className="btn-link d-block mb-3 text-end text-underline">Mot de passe oublié ?</a>	
                
                <div className="w-100">
                  <Button className="w-100" color="primary" size="" text="Connexion" />
                </div>

                <div className="social-box">
                  <span>Ou connectez vous avec :</span>
                  <div className="d-flex justify-content-between">
                    <img src="assets/images/icons/facebook.png" alt="/" />
                    <img src="assets/images/icons/google.png" alt="/" />
                  </div>
                </div>	
                <div className="d-flex align-items-center justify-content-center">
                  <a href="javascript:void(0);" className="text-light text-center d-block">Vous n&apos;avez pas de compte ?</a>
                  <a href="register.html" className="btn-link d-block ms-3 text-underline">Inscrivez vous</a>
                </div>
              </div>
            </div>
          </div>
      </>
  );
}
