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
  } = props;

  return (
    <div className="w-full flex flex-col gap-[16px]">
      <div className="w-full">
        <div
          // style={{
          //   backgroundImage: `url(${img})`,
          // }}
          className={`w-[100%] h-[250px] phone2:h-[300px] phone3:h-[400px] desktop1:h-[400px] desktop2:min-h-[300px] bg-no-repeat bg-cover ${bgPosition}`}
        >
          {/* Layout do livro aqui dentro */}
          <div className="flex flex-col desktop1:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto mt-4">
            {/* Left Section */}
            <div className="bg-gradient-to-b from-slate-700 to-slate-900 p-6 flex flex-col items-center justify-center w-full desktop1:w-1/3">
              <span className="uppercase text-sm tracking-wide text-gray-300 mb-4">
                New / Fiction
              </span>
              <div className="w-48 h-64 bg-gray-300 rounded-md shadow-md mb-4" />
              <div className="flex space-x-4 text-gray-300">
                <span className="cursor-pointer">🎧</span>
                <span className="cursor-pointer">📖</span>
              </div>
            </div>

            {/* Right Section */}
            <div className="p-6 w-full desktop1:w-2/3">
              <div className="flex space-x-6 mb-4 text-sm text-gray-500 border-b border-gray-200 pb-2">
                <span className="text-blue-600 font-semibold cursor-pointer">
                  Info
                </span>
                <span className="cursor-pointer">Reviews (15)</span>
                <span className="cursor-pointer">Similar Books</span>
              </div>

              <p className="text-sm text-gray-400 mb-2">2015</p>
              <h2 className="text-2xl font-bold text-slate-800">
                Titulo dos livros{" "}
              </h2>
              <h3 className="text-gray-500 mb-2">Nome do Autor</h3>

              {/* Stars */}
              <div className="flex text-blue-500 mb-4">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Descrição do livro
              </p>

              <div className="flex space-x-4">
                <Button
                  label="Prévia exclusiva"
                  icon={null}
                  buttonLink="#"
                  animation={false}
                  size="small"
                />
                <Button
                  label="Compre aqui"
                  icon={null}
                  buttonLink="#"
                  animation={false}
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seu conteúdo original abaixo */}
      {/* <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <h1 className="font-bold text-paragraph5 text-secondary opacity-70">
            {subtitle}
          </h1>
          <p className="text-paragraph3">{description}</p>
        </div>
        <div>
          <Button
            label={buttonLabel}
            icon={buttonIcon}
            buttonLink={buttonLink}
            animation={false}
          />
        </div>
      </div> */}
    </div>
  );
}
