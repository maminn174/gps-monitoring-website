import Privacy from '@/components/Privacy'
import { content } from '@/page-data/soglasie-personalnye-dannye.data'

export const metadata = {
  title: 'Согласие на обработку персональных данных',
  description:
    'Согласие на обработку персональных данных пользователя сайта глонасс.com: состав данных, цели обработки, срок действия и порядок отзыва согласия.',
  robots: 'noindex, follow',
}

export default () => {
  return (
    <>
      <Privacy content={content} />
    </>
  )
}
