import React from 'react';


import imagem01 from '../../assets/images/slider-screen.png';
import imagem02 from '../../assets/images/about-m-screen.png';
import imagem03 from '../../assets/images/feature-screen.png';

import imagem10 from '../../assets/images/img1.jpg';
import imagem11 from '../../assets/images/img2.jpg';
import imagem12 from '../../assets/images/img3.jpg';
import imagem13 from '../../assets/images/img4.jpg';
import imagem14 from '../../assets/images/img5.jpg';

import imagem15 from '../../assets/images/author2.jpg';
import imagem16 from '../../assets/images/author3.jpg';

import imagem17 from '../../assets/images/blog-thumb1.jpg';
import imagem18 from '../../assets/images/blog-thumb2.jpg';
import imagem19 from '../../assets/images/blog-thumb3.jpg';

import './style.css';

const Home = () => {
    return(
        <div>

            {/* // <!-- slider area start --> */}
            <section className="slider-area" id="home">
                <div className="container">
                    <div className="slider-content d-flex flex-center">
                        <div className="col-md-8 col-sm-9 col-xs-12 d-flex flex-center">
                            <div className="slider-nner">
                                <h2>ACOMPANHE  <br/> SEU FILHO</h2>
                                <p>O melhor modelo para o seu aplicativo móvel para mostrar o desempenho de seu filho e você ter um melhor acompanhamento das suas conquistas e metas escolares.</p>
                                <div className="btn-area">
                                    <a href="#">Download Agora </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 hidden-sm hidden-xs">
                            <div className="slider-m-img">
                                <img src={imagem01} alt="mobile image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- slider area end --> */}

            {/* <!-- about area start --> */}
            <section className="about-area ptb--110" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 hidden-sm hidden-xs">
                            <div className="about-left-thumb">
                                <img src={imagem02} alt="mobile screen" />
                            </div>
                        </div>
                        <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                            <div className="about-content">
                                <span>Conheça EducaCity.</span>
                                <h2>Sobre nós</h2>
                                <p>Lorem ipsum dolor sit amet, consectetr adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                <div className="about-ft">
                                    <div className="ft-single">
                                        <div className="icon"><i class="fa fa-check-square-o" aria-hidden="true"></i>
</div>
                                        <div className="ft-info">
                                            <h4>Missão</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                                        </div>
                                    </div>
                                    <div className="ft-single">
                                        <div className="icon"><i class="fa fa-check-square-o" aria-hidden="true"></i>
</div>
                                        <div className="ft-info">
                                            <h4>Visão</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                                        </div>
                                    </div>
                                    <div className="ft-single">
                                        <div className="icon"><i class="fa fa-check-square-o" aria-hidden="true"></i>
</div>
                                        <div className="ft-info">
                                            <h4>Valore</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about area end --> */}

            {/* <!-- feature area start --> */}
            <section className="feature-area ptb--110 bg-theme" id="features">
                <div className="container">
                    <div className="section-title">
                        <h2>Melhores características</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
                    </div>
                    <div className="row">
                        <div className="feature-content">
                            <div className="col-md-4 col-sm-6 col-xs-12 text-right">
                                <div className="feature-list">
                                    <div className="feature-item">
                                        <div className="icon"><i className="fa fa-certificate"></i></div>
                                        <h4>.Funcionalidade</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="icon"><i className="fa fa-certificate"></i></div>
                                        <h4>.Funcionalidade</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="icon"><i className="fa fa-certificate"></i></div>
                                        <h4>.Funcionalidade</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 hidden-xs hidden-sm">
                                <div className="feature-mscreen">
                                    <img src={imagem03} alt="mobile image" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="feature-list feature-list-right">
                                    <div className="feature-item">
                                        <div className="icon"><i className="fa fa-certificate"></i></div>
                                        <h4>.Funcionalidade</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="icon"><i className="fa fa-certificate"></i></div>
                                        <h4>.Funcionalidade</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="icon"><i className="fa fa-certificate"></i></div>
                                        <h4>.Funcionalidade</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- feature area end --> */}

            



            {/* <!-- pricing area start --> */}
            <section className="pricing-area ptb--120" id="pricing">
                <div className="container">
                    <div className="section-title text-black">
                        <h2>Plano de preços</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                    </div>
                    <div className="row">
                        <div className="pricing-list">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pricing-item text-center">
                                    <div className="prc-head bg-theme">
                                        <span>Básico</span>
                                        <h4>R$ 50,00</h4>
                                    </div>
                                    <ul className="prc-list">
                                        <li>10 UsuárioS ADM</li>
                                        <li>Atualizações gratuitas</li>
                                        <li>Suporte 24/7</li>
                                    </ul>
                                    <div className="btn-area">
                                        <a href="#">COMPRAR</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pricing-item text-center">
                                    <div className="prc-head bg-theme">
                                        <span>PREMIUM</span>
                                        <h4>R$150,00</h4>
                                    </div>
                                    <ul className="prc-list">
                                        <li>30 UsuárioS ADM</li>
                                        <li>Atualizações gratuitas</li>
                                        <li>Suporte 24/7</li>
                                    </ul>
                                    <div className="btn-area">
                                        <a href="#">COMPRAR</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pricing-item text-center">
                                    <div className="prc-head bg-theme">
                                        <span>ILIMITADA</span>
                                        <h4>R$250,00</h4>
                                    </div>
                                    <ul className="prc-list">
                                        <li>200 UsuárioS ADM</li>
                                        <li>Atualizações gratuitas</li>
                                        <li>Suporte 24/7</li>
                                    </ul>
                                    <div className="btn-area">
                                        <a href="#">COMPRAR</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- pricing area end --> */}


            {/* <!-- download area start --> */}
                <section className="download-area ptb--120 bg-theme" id="download">
                    <div className="container">
                        <div className="section-title">
                            <h2>Download</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                        </div>
                        <div className="download-btns btn-area text-center">
                            <a href="#"><i className="fa fa-android"></i>android story</a>
                            <a href="#"><i className="fa fa-apple"></i>android story</a>
                            <a href="#"><i className="fa fa-windows"></i>Windows story</a>
                        </div>
                    </div>
                </section>
            {/* <!-- download area end --> */}

 

            {/* <!-- team area start --> */}
            <div className="team-area ptb--120" id="teamarea">
                <div className="container">
                    <div className="section-title text-black">
                        <h2>NOSSA EQUIPE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                    </div>
                    <div className="row">
                        <div className="member-area">
                            
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-item">
                                    <img src={imagem10} alt="mobile image" />
                                    <div className="tmember-info">
                                        <h4>Ricardo Alves</h4>
                                        <span>Negócio / Full Stack</span>
                                        <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm tempor incididunt ut labore et</p>
                                        <div className="social-btns">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-tumblr"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-item">
                                    <img src={imagem11} alt="mobile image" />
                                    <div className="tmember-info">
                                        <h4>Eduardo</h4>
                                        <span>Mobile/ Desing</span>
                                        <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm tempor incididunt ut labore et</p>
                                        <div className="social-btns">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-tumblr"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-item">
                                    <img src={imagem12} alt="mobile image" />
                                    <div className="tmember-info">
                                        <h4>Felipe</h4>
                                        <span>Mobile / Front-end</span>
                                        <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm tempor incididunt ut labore et</p>
                                        <div className="social-btns">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-tumblr"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-item">
                                    <img src={imagem13} alt="mobile image" />
                                    <div className="tmember-info">
                                        <h4>Espaker</h4>
                                        <span>Backend</span>
                                        <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm tempor incididunt ut labore et</p>
                                        <div className="social-btns">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-tumblr"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-item">
                                    <img src={imagem14} alt="mobile image" />
                                    <div className="tmember-info">
                                        <h4>Leonardo</h4>
                                        <span>Mobile / Desing</span>
                                        <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm tempor incididunt ut labore et</p>
                                        <div className="social-btns">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-tumblr"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- team area end --> */}


            {/* <!-- subscribe area start --> */}
            <div className="subscribe-area ptb--120 bg-theme">
                <div className="container">
                    <div className="section-title">
                        <h2>Receba nossas novidades</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                    </div>
                    <div className="row">
                        <div className="subscribe_form">
                            <form action="#">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="input">
                                        <input type="text" name="name" placeholder="Name" required />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="input">
                                        <input type="text" name="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <input type="submit" name="signup" value="Sign Up" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- subscribe area end --> */}

          

            <br /><br />
            {/* <!-- letest blog area start --> */}
            <div className="letest-blog pb--120">
                <div className="container">
                    <div className="section-title text-black">
                        <h2>DEPOIMENTOS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="row">
                        <div className="blog-list">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="list-item">
                                    <div className="blog-thumbnail">
                                        <a href="blog-details.html"><img src={imagem17} alt="mobile image" /></a>
                                    </div>
                                    <h2 className="blog-title"><a href="blog-details.html">NOME DA ESCOLA</a></h2>
                                    <div className="blog-meta">
                                       
                                    </div>
                                    <div className="blog-summery">
                                        <p>Lorem ipsum dolor sit amet, consectcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="list-item">
                                    <div className="blog-thumbnail">
                                        <a href="blog-details.html"><img src={imagem18}  alt="mobile image" /></a>
                                    </div>
                                    <h2 className="blog-title"><a href="blog-details.html">NOME DA ESCOLA</a></h2>
                                    <div className="blog-meta">
                                       
                                    </div>
                                    <div className="blog-summery">
                                        <p>Lorem ipsum dolor sit amet, consectcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="list-item">
                                    <div className="blog-thumbnail">
                                        <a href="blog-details.html"><img src={imagem19} alt="mobile images" /></a>
                                    </div>
                                    <h2 className="blog-title"><a href="blog-details.html">NOME DA ESCOLA</a></h2>
                                    <div className="blog-meta">
                                       
                                    </div>
                                    <div className="blog-summery">
                                        <p>Lorem ipsum dolor sit amet, consectcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- letest blog area end --> */}
            {/* <!-- map area start --> */}


              {/* <!-- achivement area start --> */}
              <div className="achivement-area ptb--120 bg-theme
            text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="achive-single">
                                <div className="icon"><i className="fa fa-cloud-download"></i></div>
                                <h2>20K</h2>
                                <span>Download</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="achive-single">
                                <div className="icon"><i className="fa fa-heart"></i></div>
                                <h2>5K</h2>
                                <span>Clientes Satisfeitos</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- achivement area end --> */}

            <div id="map"></div>
            
            {/* <!-- map area end --> */}
            {/* <!-- contact area start --> */}
            <div className="contact-area bg-theme">
                <div className="container">
                    <section className="contact-inner" id="contact">
                        <div className="section-title text-black">
                            <h2>Contact US</h2>
                        </div>
                        <div className="contact-flex-container">
                            <div className="contact-address">
                                <h4 className="contact-title">Endereço</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
                                <ul>
                                    <li className="h-addres"><i className="fa fa-home"></i>400 Nome do endereço
                                        <br/>Bairro Cidade</li>
                                    <li><i className="fa fa-phone"></i>+55 031 99475-4745</li>
                                    <li><i className="fa fa-envelope"></i>teste@gmail.com</li>
                                </ul>
                            </div>
                            <div className="contact-form">
                                <h4 className="contact-title">Entrar em contato</h4>
                                <form action="#">
                                    <input type="text" className="input" name="name" placeholder="Seu Nome *" />
                                    <input type="email" className="input" name="email" placeholder="Seu E-mail*" />
                                    <input type="text" className="input" name="phone" placeholder="Telefone*" />
                                    <input type="text" className="input" name="subject" placeholder="Assunto*" />
                                    <textarea name="msg" className="input" id="msg" placeholder="Sua Menssagem*"></textarea>
                                    <input type="submit" id="send" value="Enviar" />
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* <!-- contact area end --> */}
    </div>
    )
}

export default  Home;
