import Privacy from '@/components/Privacy'
import { content } from '@/page-data/privacy.data'

export const metadata = {
  title: 'Политика конфиденциальности',
  description:
    'Политика обработки персональных данных сайта глонасс.com: порядок сбора, хранения и использования персональной информации пользователей.',
  robots: 'noindex, nofollow',
}

export default () => {
  return (
    <>
      <Privacy content={content} />
    </>
  )
}
