import { siteMetadata } from '~/data/siteMetadata'
import GithubLogo from '~/icons/github.svg'
import TwitterLogo from '~/icons/twitter.svg'
import LinkedinLogo from '~/icons/linkedin.svg'

export default function SocialAccounts() {
  let logoClassName =
    'h-6 w-6 fill-current text-gray-700 hover:text-blue-500 hover:scale-[1.2] ' +
    'dark:text-gray-200 dark:hover:text-blue-400 ease-out duration-100'

  return (
    <div>
      <div className="flex space-x-4">
        <a
          href={siteMetadata.github}
          target="_blank"
          data-umami-event="contact-github"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Github</span>
          <GithubLogo className={logoClassName} />
        </a>
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          data-umami-event="contact-linkedin"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Linkedin</span>
          <LinkedinLogo className={logoClassName} />
        </a>
        <a
          href={siteMetadata.twitter}
          target="_blank"
          data-umami-event="contact-twitter"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Twitter</span>
          <TwitterLogo className={logoClassName} />
        </a>
      </div>
    </div>
  )
}
