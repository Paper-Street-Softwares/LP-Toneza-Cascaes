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
    default: "squares",
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
      <SectionArea className={`${bgClass}`} paddingbot={true}>
        <SectionWrapper>
          <SectionHeader
            colorMode="dark"
            className={`text-center ${textClass}`}
            sectionHeaderTitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t("ctaSecondary.title"),
                }}
              />
            }
            sectionHeaderSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t("ctaSecondary.subtitleDireitaPartes"),
                }}
              />
            }
            titleColorSet={textClass}
            subtitleColorSet={textClass}
            miniTitleBgColor={false}
            type=""
          />
          <Button
            className="bg-buttonColor text-labelButtons px-6 py-3 rounded-2xl hover:scale-105 transition"
            label={t("ctaSecondary.ctaButtonText")}
            onClick={() => setVisible(true)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-open-check-icon lucide-book-open-check"
              >
                <path d="M12 21V7" />
                <path d="m16 12 2 2 4-4" />
                <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
              </svg>
            }
          />
        </SectionWrapper>
      </SectionArea>

      {/* Modal */}
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={
          <span dangerouslySetInnerHTML={{ __html: t("ctaSecondary.title") }} />
        }
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "90vw" }}
      >
        <div className="text-paragraph3">
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: t("hero.modalSubtitle") }}
          />
          <p
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: t("hero.modalDescription") }}
          />

          <ul className="space-y-4">
            {livros.map((livro, i) => (
              <li key={i}>
                <a
                  href={livro.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
                >
                  <span>{livro.titulo}</span>
                  <MoveRight size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
}
