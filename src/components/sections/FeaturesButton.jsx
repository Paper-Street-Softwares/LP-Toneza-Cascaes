import { useState } from "react";
import { X } from "lucide-react";
import { Dialog } from "primereact/dialog";
import { useTranslation } from "react-i18next";

import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";
import bgClaro from "../../assets/imgs/cta/backgroundLight.webp";

export default function FeaturesButton({ colorMode }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const textClass = textClasses[colorMode] || textClasses.default;

  const cardNumbers = [1, 2, 3, 4, 5];

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
        <SectionArea id="service" className="">
          <SectionHeader
            className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
            miniTitle={t("features.miniTag", { defaultValue: "Recursos" })}
            sectionHeaderTitle={t("features.title", {
              defaultValue: "Nossos Livros",
            })}
            sectionHeaderSubtitle={t("features.subtitle", {
              defaultValue: "Descubra os detalhes",
            })}
            titleColorSet={textClass}
            subtitleColorSet={textClass}
            miniTitleBgColor="bg-minititle"
            miniTitleTextColor="text-minititleLightLabel"
          />

          <SectionWrapper>
            <div className="flex flex-wrap justify-center desktop1:justify-evenly w-full gap-[36px] tablet1:gap-[24px] desktop1:w-[90%]">
              {cardNumbers.map((i) => {
                const card = content.texts.features[`card${i}`];

                return (
                  <FeatureImgOnBgCardButton
                    key={i}
                    bgImg={card.img}
                    title={t(`features.card${i}.title`, {
                      defaultValue: "Título indefinido",
                    })}
                    subtitle={t(`features.card${i}.subtitle`, {
                      defaultValue: "",
                    })}
                    description={t(`features.card${i}.description`, {
                      defaultValue: "",
                    })}
                    buttonLabel={t(`features.card${i}.buttonLabel`, {
                      defaultValue: "Ver mais",
                    })}
                    pages={t(`features.card${i}.pages`, { defaultValue: "—" })}
                    year={t(`features.card${i}.year`, { defaultValue: "—" })}
                    animation
                    onClick={() =>
                      onClick(
                        t(`features.card${i}.title`, {
                          defaultValue: "Título indefinido",
                        }),
                        t(`features.card${i}.subtitle`, { defaultValue: "" }),
                        <ServiceDetailCard
                          img={card.img}
                          subtitle={t(`features.card${i}.subtitle`, {
                            defaultValue: "",
                          })}
                          description={
                            <span
                              dangerouslySetInnerHTML={{
                                __html: t(`features.card${i}.description`, {
                                  defaultValue: "",
                                }),
                              }}
                            />
                          }
                          buttonIcon={card.icon}
                          buttonLabel={t(`features.card${i}.buttonLabelModal`, {
                            defaultValue: "Ver mais",
                          })}
                          buttonLink={card.linkPrevia}
                          bgPosition="bg-top"
                          bookTitle={t(`features.card${i}.title`, {
                            defaultValue: "Título indefinido",
                          })}
                          bookDescription={
                            <span
                              dangerouslySetInnerHTML={{
                                __html: t(`features.card${i}.description`, {
                                  defaultValue: "",
                                }),
                              }}
                            />
                          }
                          bookAuthor={t(`features.card${i}.author`, {
                            defaultValue: "Autor desconhecido",
                          })}
                          bookYear={t(`features.card${i}.year`, {
                            defaultValue: "—",
                          })}
                          linkPrevia={card.linkPrevia}
                          linkShare={card.linkShare}
                        />
                      )
                    }
                    colorMode={colorMode}
                  />
                );
              })}
            </div>
          </SectionWrapper>
        </SectionArea>
      </div>

      {/* Modal */}
      <Dialog
        className={`font-secondFont ${textClass} h-auto [@media(max-width:425px)]:h-[85vh]`}
        closeIcon={<X size={20} />}
        header=" Informações do Livro"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "40vw" }}
        breakpoints={{
          "1440px": "60vw",
          "1024px": "80vw",
          "768px": "80vw",
          "640px": "90vw",
          "425px": "90vw",
        }}
      >
        <div className={`m-0 ${textClass}`}>{modalContent}</div>
      </Dialog>
    </>
  );
}
