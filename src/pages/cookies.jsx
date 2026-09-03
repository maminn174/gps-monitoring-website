import Privacy from '@/components/Privacy'
import { content } from '@/page-data/cookies.data'

export const metadata = {
  title: 'Политика использования файлов cookie',
  description:
    'Политика использования файлов cookie на сайте глонасс.com: какие данные собираются, для чего они используются и как ими управлять.',
  robots: 'noindex, follow',
}

export default () => {
  return (
    <>
      <Privacy content={content} />
    </>
  )
}
