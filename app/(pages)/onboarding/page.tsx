"use client"

export default function Onboarding() {

 
  return (
    <>
      <div className="vh-100 w-100 bg-primary d-flex align-items-center justify-content-center align-content-center">
        <div className="">
          <img src="/assets/images/logo.png" width={100} height={100} />
        </div>
        <div className="mb-3">
						<div className="swiper-container get-started">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="started">
										<h1 className="title">Admission scolaire</h1>
										<p>Trouvez, postulez, et gérez vos dossiers en toute simplicité, garantissant ainsi un avenir académique prometteur. Nous sommes partenaires de plusieurs groupes d’écoles à l’étranger</p>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="started">
										<h1>Accompagnement personnalisé</h1>
										<p> Recherche de logement, préparation aux entretiens, formalités VISA ou assurances, nous simplifions chaque étape pour vous permettre de vous concentrer sur l'essentiel : votre réussite.</p>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="started">
										<h1>Caution bancaire(AVI)</h1>
										<p>Nous travaillons avec des partenaires bancaires locaux que nous connaissons bien et avec lesquels nous avons bâti des bases solides de confiance. Dés à présent  obtenez votre AVI avec 0 frais de service</p>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-btn">
							<div className="swiper-pagination style-1 flex-1"></div>
						</div>
					</div>


        
      </div>
	<div className="content-body d-none">
		<div className="container vh-100">
			<div className="welcome-area">
				<div className="bg-image bg-image-overlay" ></div>
				<div className="join-area">
					<div className="mb-3">
						<div className="swiper-container get-started">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="started">
										<h1 className="title">Hello, And Welcome to Soziety.</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="started">
										<h1>People's First Prefrence Is Soziety</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="started">
										<h1>Expand Your Network With Soziety</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-btn">
							<div className="swiper-pagination style-1 flex-1"></div>
						</div>
					</div>
					<a href="register.html" className="btn btn-primary btn-block mb-3">CREATE ACCOUNT</a>
					<a href="login.html" className="btn btn-light btn-block mb-3">SIGN IN</a>
					<a href="forgot-password.html" className="text-light text-center d-block">Forgot your account?</a>
				</div>
			</div>
		</div>
	</div>
    </>
  );
}
