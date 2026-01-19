import React from 'react'
import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import SectionArea from '../sectionElements/SectionArea'
import SectionHeader from '../sectionElements/SectionHeader'
import SectionWrapper from '../sectionElements/SectionWrapper'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import SocialPrint from '../sectionElements/aboutInstagram/SocialPrint'
import DefaultInstagram from '../sectionElements/aboutInstagram/DefaultInstagram'
import ParagraphsAboutSocial from '../sectionElements/aboutInstagram/ParagraphsAboutSocial'
import RedesSociais from '../sectionElements/aboutInstagram/RedesSociais'
import content from '../../content/content'
import Button from '../interactives/Button'
import { Dialog } from 'primereact/dialog'
import { X } from 'lucide-react'

export default function AboutInstagram({ socialPrint, colorMode }) {
  const [visible, setVisible] = useState(false)
  const { t } = useTranslation()

  // Definir classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgFixedLight',
    default: 'bg-bgSectionDark',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-black',
    default: 'text-white',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const textClass = textClasses[colorMode] || textClasses.default

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-4">
      <img
        src={content.texts.navbar.logo.img}
        className="w-10"
        shape="circle"
      />
      <span className="font-bold white-space-nowrap">Alétheia</span>
    </div>
  )
  const footerContent = (
    <div className="pt-4 border-t-[2px]">
      <Button
        label="Fechar"
        icon={<X />}
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  )

  return (
    <SectionArea id="about" className={`${bgClass}`} paddingtop={true}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[40px] desktop1:justify-between">
        {socialPrint ? (
          <SocialPrint colorMode={colorMode} />
        ) : (
          <DefaultInstagram colorMode={colorMode} />
        )}
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className={`text-center`}
              miniTitle={t('about.aboutSocial.miniTag')}
              sectionHeaderTitle={t('about.aboutSocial.title')}
              sectionHeaderSubtitle={t('about.aboutSocial.subtitle')}
              type="article"
              titleColorSet={textClass}
              subtitleColorSet={textClass}
            />
          </MotionDivDownToUp>
          <ParagraphsAboutSocial colorMode={colorMode} />
          <Button label="Continuar Lendo" onClick={() => setVisible(true)} />
          {/* <div>
            <RedesSociais
              instagram={false}
              facebook={false}
              x={false}
              tiktok={false}
              linkedin={false}
            />
          </div> */}
          <Dialog
            visible={visible}
            modal
            header={headerElement}
            footer={footerContent}
            style={{ width: '50rem' }}
            onHide={() => {
              if (!visible) return
              setVisible(false)
            }}
          >
            <Trans
              i18nKey="about.aboutSocial.description"
              components={{ br: <br /> }}
            />
          </Dialog>
        </div>
      </SectionWrapper>
    </SectionArea>
  )
}
