import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";
import { BookOpen, Calendar } from "lucide-react";

export default function FeatureImgOnBgCardButton(props) {
  const {
    bgImg,
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    onClick,
    colorMode,
    pages, // número de páginas
    year, // ano de inauguração
    animation = true,
  } = props;

  FeatureImgOnBgCardButton.propTypes = {
    bgImg: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    colorMode: PropTypes.any,
    onClick: PropTypes.func,
    pages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    animation: PropTypes.bool,
  };

  const Wrapper = animation ? MotionDivDownToUp : "div";

  return (
    <Wrapper className="w-full flex flex-col max-w-[340px] rounded-xl border border-gray-200 shadow-md bg-white font-mainFont">
      {/* Imagem */}
      <div className="w-full h-[380px] flex justify-center items-center ">
        <img
          src={bgImg}
          alt={title}
          className="w-full h-full object-cover rounded-[20px] p-[10px] "
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex  flex-col h-full justify-between gap-4">
        <h1 className="font-bold text-title2 leading-6 text-gray-900 ">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-gray-600 flex-grow  ">{subtitle}</p>
        )}

        <div className="flex justify-between items-center mt-2 ">
          <div className="flex gap-4 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <BookOpen size={16} /> {pages}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} /> {year}
            </span>
          </div>
          <Button
            removeAnchor={true}
            label={buttonLabel || "Saiba mais"}
            buttonLink={buttonLink}
            color={colorMode}
            size="small"
            onClick={onClick}
            className="bg-buttonColor rounded-lg "
          />
        </div>
      </div>
    </Wrapper>
  );
}
