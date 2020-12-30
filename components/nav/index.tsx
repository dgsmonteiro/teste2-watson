import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'

export default function Nav({ title = 'Comentários' }) {
  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          <ButtonLink href="/new">Novo</ButtonLink>
        </div>
      </nav>
    </Container>
  )
}
