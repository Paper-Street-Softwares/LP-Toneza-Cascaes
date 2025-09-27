import Button from "../interactives/Button";
import content from "../../content/content";
import { useNavigate } from "react-router-dom";
import { X, MoveRight } from "lucide-react";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import bgClaro from "../../assets/imgs/cta/backgroundLight.webp";

export default function Cta({ colorMode = "default" }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  // Links fixos da Hotmart
  const livros = [
    {
      titulo: "O LIVRO DAS 777 VERDADES",
      url: "https://pay.hotmart.com/A101084251R",
    },
    {
      titulo: "UM LIVRO DE VÁRIOS TÍTULOS",
      url: "https://pay.hotmart.com/B100911746E",
    },
    {
      titulo: "OS GUARDIÕES DA LUZ",
      url: "https://pay.hotmart.com/K100883197L",
    },
    {
      titulo: "A MULHER DEVE SER O TEMPLO...",
      url: "https://pay.hotmart.com/S101157235K",
    },
    {
      titulo: "A ESCADA ESQUECIDA",
      url: "https://pay.hotmart.com/Q101488384Y",
    },
  ];

  // Definir classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgClaro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SectionArea className={`${bgClass}`} paddingbot={true} id="cta">
          <SectionWrapper className="">
            <SectionHeader
              colorMode="dark"
              className={`text-center ${textClass}`}
              miniTitle={t("ctaSecondary.minitag")}
              sectionHeaderTitle={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t("ctaSecondary.title"),
                  }}
                />
              }
              titleColorSet={textClass}
              subtitleColorSet={textClass}
              type=""
            />
            <div className="relative flex w-full justify-center text-center pb-[64px] desktop1:pb-0">
              <h3 className="font-mainFont text-title1 w-[90%] tablet1:w-[60%] desktop1:w-[570px]">
                <span
                  dangerouslySetInnerHTML={{
                    __html: t("ctaSecondary.subtitleDireitaPartes"),
                  }}
                />
              </h3>

              <img
                src={content.texts.cta.seloCta}
                alt="Selo da Livraria"
                className="absolute w-20 bottom-[-15%] left-1/2 transform -translate-x-1/2 phone2:bottom-[-20%] tablet1:bottom-[-20%] desktop1:bottom-[-65%] desktop1:left-[62%] desktop1:translate-x-0
             desktop2:bottom-[-65%] desktop2:left-[59%] "
              />
            </div>
          </SectionWrapper>
        </SectionArea>
      </div>
    </>
  );
}
