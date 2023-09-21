//Head is a next component 
import Head from 'next/head';
//Link component is a react compoment 
import Link from 'next/link';

export default function Layout( {children, home} ){
  return(
    <div>
      <Head>
        <title>Famous Cats and Dogs</title>
      </Head>
      <header>
        <nav>
          <a href ='#'>Doggos</a>
          <a href='#'>Kitters</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <Link href="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      )
      }
      <footer>  
        <p>©2023 Patrick Hulten </p>
      </footer>
    </div>
  );
}