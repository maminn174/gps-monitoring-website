import Privacy from '@/components/Privacy'
import { content } from '@/page-data/soglasie-rassylku.data'

export const metadata = {
  title: 'Согласие на рекламную рассылку',
  description:
    'Согласие на получение рекламной информации, уведомлений и рассылок от сайта глонасс.com с возможностью отзыва в любой момент.',
  robots: 'noindex, follow',
}

export default () => {
  return (
    <>
      <Privacy content={content} />
    </>
  )
}
