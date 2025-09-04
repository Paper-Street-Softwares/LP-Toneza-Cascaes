/* eslint-disable react/prop-types */
import Button from "../interactives/Button";

export default function ServiceDetailCard(props) {
  const {
    img,
    subtitle,
    description,
    buttonLabel,
    buttonIcon,
    buttonLink,
    bgPosition,
    bookTitle = "Título indefinido",
    bookAuthor = "Autor indefinido",
    bookDescription = "Descrição indefinida",
    bookYear = "Ano indefinido",
    linkPrevia,
    linkShare,
  } = props;

  return (
    <div className="w-full flex flex-col items-center desktop1:items-start">
      <div className="flex flex-col desktop1:flex-row rounded-2xl w-full gap-4 ">
        {/* Imagem */}
        <div className="flex flex-col min-h-[300px] items-center justify-center w-full desktop1:size-[30%] ">
          {img ? (
            <img
              src={img}
              alt={bookTitle}
              className="mr-auto rounded-md desktop2:max-h-[400px] w-auto object-contain"
            />
          ) : (
            <div className="w-auto bg-gray-300 rounded-md mb-4" />
          )}
        </div>

        {/* Conteúdo */}
        <div className="desktop1:p-4 w-full desktop1:w-2/3 ">
          <div className="flex space-x-6 mb-4 text-sm text-gray-500 border-b border-gray-200 pb-2 desktop1:hidden"></div>

          <p className="text-sm text-gray-400 mb-2">{bookYear}</p>
          <h2 className="text-2xl font-bold text-slate-800">{bookTitle}</h2>
          <h3 className="text-gray-500 my-2">{bookAuthor}</h3>

          <p className="text-black/50 text-sm leading-relaxed mb-6">
            {bookDescription}
          </p>

          <div className="flex space-x-4">
            {linkPrevia && (
              <Button
                label="Prévia exclusiva"
                buttonLink={linkPrevia}
                animation={false}
                size="small"
              />
            )}
            {linkShare && (
              <Button
                label="Compre aqui"
                buttonLink={linkShare}
                animation={false}
                size="small"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
