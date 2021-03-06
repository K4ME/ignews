import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../Services/prismic';
import styles from './styles.module.scss';


export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Por que o Facebook (Meta) criou o GraphQL?</strong>
            <p>Podemos citar inúmeras inovações tecnológicas proporcionadas pelo Meta (antes chamado Facebook) na última década, não nos limitando apenas ao React e React Native. Entre tantas, uma das mais referenciadas e utilizadas hoje no mercado de TI é o GraphQL, criada em 2012.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Por que o Facebook (Meta) criou o GraphQL?</strong>
            <p>Podemos citar inúmeras inovações tecnológicas proporcionadas pelo Meta (antes chamado Facebook) na última década, não nos limitando apenas ao React e React Native. Entre tantas, uma das mais referenciadas e utilizadas hoje no mercado de TI é o GraphQL, criada em 2012.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Por que o Facebook (Meta) criou o GraphQL?</strong>
            <p>Podemos citar inúmeras inovações tecnológicas proporcionadas pelo Meta (antes chamado Facebook) na última década, não nos limitando apenas ao React e React Native. Entre tantas, uma das mais referenciadas e utilizadas hoje no mercado de TI é o GraphQL, criada em 2012.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'Post')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2));

  return{
    props: {}
  }
}