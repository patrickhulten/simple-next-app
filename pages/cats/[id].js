import Layout from "../../components/layout";
import { getCatIds, getCatData } from "../../lib/data";

export async function getStaticProps( {params} ) {
  const itemData = await getCatData(params.id);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths(){
  const paths = getCatIds();
  return {
    paths, 
    fallback:false
  };
}

export default function Entry( { itemData }){
  return(
    <Layout>
      <div className="card col-6">
        <div className="card-body">
         <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.movie}</h6>
          <p className="card-text">{itemData.breed}</p>
          <a href="#" className="card-link">{itemData.year}</a>
        </div>
      </div>
    </Layout>
  );
}