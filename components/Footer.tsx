import { siteMetadata } from '~/data/siteMetadata'
import SocialAccounts from '~/components/SocialAccounts'

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-y-2 pb-2 items-center justify-center">
        <div className="mb-4">
          <SocialAccounts />
        </div>
        {/* <ButtonDown /> */}
        <div
          className="text-neutral-400 dark:text-neutral-500 gap-x-2 text-sm
          text-center items-center justify-center sm:flex"
        >
          <div className="mb-1 sm:mb-0">{`Kaveh Tehrani © ${new Date().getFullYear()}`}</div>
          <span className="hidden sm:flex">{` • `}</span>
          <span>{siteMetadata.footerTitle}</span>
          <span className="sm:flex">{` • `}</span>
        </div>
      </div>
    </footer>
  )
}
