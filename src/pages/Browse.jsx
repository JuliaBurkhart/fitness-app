import React, {useState} from "react";
import styled from 'styled-components';


import { useQuery } from "@apollo/client";


import {GET_ALLPROGRAMS } from "../graphql/queries";

import Filter from "../components/Filter";
import BrowserEntry from "../components/BrowserEntry";
import SmallText from "../elements/SmallText";
import Spinner from "../components/Spinner";

const PageDiv = styled.div`
margin-top: 75px;
padding: 0 20px;
`

const Button = styled.button`
    margin-top: 25px;
    margin-bottom: 17px;
    cursor: pointer;
`






function Browse () {

const [filterShown, setFilterShown] = useState(false);

const {loading, error, data} = useQuery(GET_ALLPROGRAMS, {
  variables: { limit: 4, offset: 0 }});
if (loading) return <Spinner />
if (error) return <p>`Error: ${error.message}`</p>
console.log(data.allProgram);

function handleClick() {
(filterShown === false) ? setFilterShown(true) : setFilterShown(false);
}

  return (
    <PageDiv>
      <h2>Browse</h2>
      <Button onClick={handleClick}><SmallText>Filter</SmallText></Button>
{(filterShown === true) && <Filter />}

      {data.allProgram.map(program => {
  return ( 
      <BrowserEntry title={program.title} id={program._id} key={program._id} />
  )
})}



    </PageDiv>      
  
  )
}

export default Browse;