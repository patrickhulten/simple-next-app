import Layout from "../components/layout";
import { getSortedList } from "../lib/data.js";
import { getSortedCats } from "../lib/data.js";
import Link from "next/link";

export async function getStaticProps() {
  const allData = getSortedList();
  const moreData = getSortedCats();
  return {
    props: { allData, moreData },
  };
}

export default function Home({ allData, moreData }) {
  return (
    <Layout home>
      <h1>Famous Dogs</h1>
      <div className="list-group">
        {allData.map(({ id, name }) => (
          <Link
            key={id}
            href={`/${id}`}
            className="list-group-item list-group-item-action"
          >
            {name}
          </Link>
        ))}
      </div>
      <h1>Famous Cats</h1>
      <div className="list-group">
        {moreData.map(({ id, name }) => (
          <Link
            key={id}
            href={`/cats/${id}`}
            className="list-group-item list-group-item-action"
          >
            {name}
          </Link>
        ))}
      </div>
    </Layout>
  );
}
