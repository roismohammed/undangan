import { Link } from '@inertiajs/react'

export default function Footer() {
  return (
    <div className="flex sticky top-0 h-14 items-center gap-0 bg-slate-50 px-4 lg:h-[60px] z-40 ">
      <nav className="w-full flex-1 grid md:flex items-center justify-between">
        <div className={'flex text-center md:text-start gap-2'}>
          <p className={'text-sm text-slate-500'}>
            <span className="font-semibold">© Hadeer 2024</span>. All Right
            Reserved - Presensi Apps with Artificial Intelegent
          </p>
        </div>

        <div className="hidden md:flex items-center gap-0.5 p-4">
          <ul className={'flex gap-3'}>
            <li>
              <Link
                href={'#'}
                className={'text-sm text-primary hover:underline'}
              >
                Dokumentasi
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className={'text-sm text-primary hover:underline'}
              >
                Bantuan
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className={'text-sm text-primary hover:underline'}
              >
                Chat Konsultan
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
