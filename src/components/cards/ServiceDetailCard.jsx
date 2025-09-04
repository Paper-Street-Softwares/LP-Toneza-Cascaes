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
    <div className="w-full flex flex-col gap-[16px] text-justify">
      <div className="w-full">
        <div
          className={`w-[100%] h-[250px] phone2:h-[300px] phone3:h-[400px] desktop1:h-[400px] desktop2:min-h-[300px] bg-no-repeat bg-cover ${bgPosition}`}
        >
          <div className="flex flex-col desktop1:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto mt-4">
            <div className="bg-gradient-to-b bg-bgFixedDark p-6 flex flex-col items-center justify-center w-full desktop1:w-1/3">
              {img ? (
                <img
                  src={img}
                  alt={bookTitle}
                  className="w-48 object-cover rounded-md shadow-md mb-4"
                />
              ) : (
                <div className="w-48 h-64 bg-gray-300 rounded-md shadow-md mb-4" />
              )}
              <div className="flex space-x-4 text-gray-300">
                <span className="cursor-pointer">🎧</span>
                <span className="cursor-pointer">📖</span>
              </div>
            </div>

            <div className="p-6 w-full desktop1:w-2/3">
              <div className="flex space-x-6 mb-4 text-sm text-gray-500 border-b border-gray-200 pb-2">
                <span className="text-blue-600 font-semibold cursor-pointer">
                  Informações do Livro
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-2">{bookYear}</p>
              <h2 className="text-2xl font-bold text-slate-800">{bookTitle}</h2>
              <h3 className="text-gray-500 my-2">{bookAuthor}</h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {bookDescription}
              </p>

              <div className="flex space-x-4">
                {linkPrevia && (
                  <Button
                    label="Prévia exclusiva"
                    icon={null}
                    buttonLink={linkPrevia}
                    animation={false}
                    size="small"
                  />
                )}
                {linkShare && (
                  <Button
                    label="Compre aqui"
                    icon={null}
                    buttonLink={linkShare}
                    animation={false}
                    size="small"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
