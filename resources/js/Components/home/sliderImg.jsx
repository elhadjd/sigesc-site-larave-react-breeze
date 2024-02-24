import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../assets/home/slider.css";

// import required modules

export const SliderImg = () => {
  const images = [
    {
      path: '/img/capa.png',
      name: 'Sigesc capa'
    },
    {
      path: '/img/Sigesc Login.png',
      name: 'Sigesc Login'
    },
    {
      path: '/img/Sigesc Modulos disponiveis.png',
      name: 'Sigesc Modulos disponiveis'
    },
    {
      path: '/img/Sigesc Financeiros e Relatorios Analiticos .png',
      name: 'Sigesc Financeiros e Relatórios Analíticos'
    },
    {
      path: '/img/Sigesc Paineies proficionais.png',
      name: 'Sigesc Paineies proficionais'
    },
    {
      path: '/img/Sigesc Financeiros e Relatorios Analiticos-2.png',
      name: 'Sigesc Financeiros e Relatórios Analíticos'
    },
    {
      path: '/img/Sigesc avaliacao de produtos calculo de custo vanda e ganhos.png',
      name: 'Sigesc avaliação de produtos calculo de custo vanda e ganhos'
    },
    {
      path: '/img/Sigesc lista de produtos.png',
      name: 'Sigesc lista de produtos'
    },
    {
      path: '/img/Sigesc multiplos pontos de vendas.png',
      name: 'Sigesc multiplos pontos de vendas'
    },
    {
      path: '/img/Sigesc Encomendas corentes.png',
      name: 'Sigesc Encomendas corentes'
    },
    {
      path: '/img/Sigesc Ponto de Venda (PDV).png',
      name: 'Sigesc Ponto de Venda (PDV)'
    },
    {
      path: '/img/Sigesc Ponto de Venda (PDV) Pagamentos.png',
      name: 'Sigesc Ponto de Venda (PDV) Pagamentos'
    },
    {
      path:'/img/sigesc Software de Gestao Integrado comercial categoria de produtos.png',
      name: 'SIGESC-SOFT Software de Gestao Integrado comercial categoria de produtos'
    },
    {
      path:'/img/sigesc Software de Gestao Integrado comercial gerenciamento de stock.png',
      name: 'SIGESC-SOFT Software de Gestao Integrado comercial gerenciamento de stock'
    },
    {
      path:'/img/sigesc Software de Gestao Integrado comercial lista de compras.png',
      name: 'SIGESC-SOFT Software de Gestao Integrado comercial lista de compras'
    },
    {
      path:'/img/sigesc Software de Gestao Integrado comercial lista de funcionarios.png',
      name: 'SIGESC-SOFT Software de Gestao Integrado comercial lista de funcionarios'
    },
    {
      path:'/img/sigesc Software de Gestao Integrado comercial lista de departamento de funcionarios.png',
      name: 'SIGESC-SOFT Software de Gestao Integrado comercial lista de departamento de funcionarios'
    },
    {
      path:'/img/sigesc Software de Gestao Integrado comercial relatorio de funcionario.png',
      name: 'SIGESC-SOFT Software de Gestao Integrado comercial relatorio de funcionario'
    },
  ]
  return (
    <>
      <Swiper
      autoplay= {{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={false}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay]}
        className="mySwiper">
          {
            images.map((image,index)=>(
              <SwiperSlide key={index}>
                <img src={image.path} alt={image.name} />
              </SwiperSlide>
            ))
          }
      </Swiper>
    </>
  );
}

