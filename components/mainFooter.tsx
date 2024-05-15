import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight, GithubIcon, Linkedin, SlackIcon, Twitter, Youtube } from 'lucide-react'
import { Github } from './social-icons/icons'

/**
 * Footer component
 */
function Footer() {
  return (
    <div className="flex flex-col justify-center border-t border-solid border-gray-900">
      <div className="flex w-full items-center justify-center bg-neutral-950 bg-opacity-70 px-16 py-14 backdrop-blur-[20px] max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[1200px] justify-between max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pb-2.5 text-sm tracking-wide text-stone-300 max-md:mt-10">
                <div className="text-sm font-semibold uppercase leading-5 tracking-wide text-gray-700">
                  platform
                </div>
                <Link href="#" className="mt-5">
                  Metrics
                </Link>
                <Link href="#" className="mt-5">
                  Logs
                </Link>
                <Link href="#" className="mt-5">
                  Traces
                </Link>
                <Link href="#" className="mt-5">
                  Dashboards
                </Link>
                <Link href="#" className="mt-5">
                  Alerts
                </Link>
                <Link href="#" className="mt-5">
                  Exceptions
                </Link>
                <Link href="#" className="mt-5">
                  Integrations
                </Link>
                <div className="mt-5 flex items-center gap-2 whitespace-nowrap pr-3.5">
                  <Link href="#">Documentation</Link>
                  <ArrowUpRight size={16} />
                </div>
                <div className="mt-5 flex gap-2 pr-3.5">
                  <Link href="#">Product guide</Link>
                  <ArrowUpRight size={16} />
                </div>
                <Link href="#" className="mt-5">
                  FAQ
                </Link>
              </div>
            </div>
            <div className="ml-5 flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col self-stretch pb-20 text-sm tracking-wide text-stone-300 max-md:mt-10">
                <div className="text-sm font-semibold uppercase leading-5 tracking-wide text-gray-700">
                  company
                </div>
                <Link href="#" className="mt-5">
                  Team
                </Link>
                <Link href="#" className="mt-5">
                  Careers
                </Link>
                <Link href="#" className="mt-5">
                  Privacy Policy
                </Link>
                <Link href="#" className="mt-5">
                  Terms of Service
                </Link>
                <div className="mt-5 flex items-center gap-2 pr-7 max-md:pr-5">
                  <Link href="#">Press Kit</Link>
                  <ArrowUpRight size={16} />
                </div>
                <div className="mt-5 flex items-center gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                  <Link href="#">Contact</Link>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
            <div className="ml-5 flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col self-stretch pb-20 text-sm tracking-wide text-stone-300 max-md:mt-10">
                <div className="text-sm font-semibold uppercase leading-5 tracking-wide text-gray-700">
                  developers
                </div>
                <div className="mt-5 flex items-center gap-2 pr-4">
                  <Link href="#">Open Source</Link>
                  <ArrowUpRight size={16} />
                </div>
                <div className="mt-5 flex items-center gap-2 whitespace-nowrap pr-5">
                  <Link href="#">Self-hosting</Link>
                  <ArrowUpRight size={16} />
                </div>
                <Link href="#" className="mt-5">
                  Tutorials
                </Link>
                <Link href="#" className="mt-5">
                  Guides
                </Link>
                <Link href="#" className="mt-5">
                  Examples
                </Link>
                <Link href="#" className="mt-5">
                  Comparisons
                </Link>
                <Link href="#" className="mt-5">
                  Changelog
                </Link>
              </div>
            </div>
            <div className="ml-5 flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-end shadow-sm max-md:mt-10">
                <div className="flex justify-between gap-1.5 self-end whitespace-nowrap text-center text-lg font-medium leading-5 text-white">
                  <div>SigNoz</div>
                </div>
                <div className="mt-5 items-end justify-center rounded text-sm leading-5 text-emerald-300">
                  All systems operational
                </div>
                <div className="mt-5 flex items-end justify-between gap-4 py-2">
                  <Link href={'https://github.com/SigNoz'} target="_blank">
                    <GithubIcon size={24} />{' '}
                  </Link>

                  <Link href={'https://www.linkedin.com/company/signozio/'} target="_blank">
                    <Linkedin size={24} />
                  </Link>

                  <Link href={'https://signoz.io/slack'} target="_blank">
                    <SlackIcon size={24} />
                  </Link>

                  <Link href={'https://twitter.com/SigNozHQ'} target="_blank">
                    <Twitter size={24} />
                  </Link>

                  <Link href={'https://www.youtube.com/@signoz'} target="_blank">
                    <Youtube size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
