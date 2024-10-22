'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

export default function Onboarding() {
  // useEffect(() => {
  //   import('swiper/swiper-bundle.min.css');
  // }, []);

  return (
    <>
      <div className="vh-100 w-100 bg-primary d-flex align-items-center justify-content-center align-content-center">
        <div>
          <img src="/assets/images/logo.png" width={100} height={100} alt="Logo" />
        </div>
        <div className="mb-3">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="swiper-container get-started"
          >
            <SwiperSlide className="swiper-slide">
              <div className="started">
                <h1 className="title">Admission scolaire</h1>
                <p>
                  Trouvez, postulez, et gérez vos dossiers en toute simplicité,
                  garantissant ainsi un avenir académique prometteur. Nous sommes
                  partenaires de plusieurs groupes d&apos;écoles à l&apos;étranger.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="started">
                <h1>Accompagnement personnalisé</h1>
                <p>
                  Recherche de logement, préparation aux entretiens, formalités VISA ou
                  assurances, nous simplifions chaque étape pour vous permettre de vous
                  concentrer sur l&apos;essentiel : votre réussite.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="started">
                <h1>Caution bancaire(AVI)</h1>
                <p>
                  Nous travaillons avec des partenaires bancaires locaux que nous
                  connaissons bien et avec lesquels nous avons bâti des bases solides de
                  confiance. Dés à présent obtenez votre AVI avec 0 frais de service.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-btn">
            <div className="swiper-pagination style-1 flex-1"></div>
          </div>
        </div>
      </div>
      <div className="content-body d-none">
        <div className="container vh-100">
          <div className="welcome-area">
            <div className="bg-image bg-image-overlay"></div>
            <div className="join-area">
              <div className="mb-3">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="swiper-container get-started"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="started">
                      <h1 className="title">Hello, And Welcome to Soziety.</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="started">
                      <h1>People's First Preference Is Soziety</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="started">
                      <h1>Expand Your Network With Soziety</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
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
