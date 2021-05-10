import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";


import {GET_ALLPROGRAMS } from "../graphql/queries";

import BrowserEntry from "../components/BrowserEntry";
import SmallText from "../elements/SmallText";
import Spinner from "../components/Spinner";

const PageDiv = styled.div`
margin-top: 75px;
padding: 0 20px;
`

const Span = styled.span`
    margin-top: 25px;
    margin-bottom: 17px;
`






function Browse () {

const {loading, error, data} = useQuery(GET_ALLPROGRAMS, {
  variables: {first:10}
});
if (loading) return <Spinner />
if (error) return <p>`Error: ${error.message}`</p>
console.log(data.allProgram);

  return (
    <PageDiv>
      <h2>Browse</h2>
      <Span><SmallText>Filter</SmallText></Span>


      {data.allProgram.map(program => {
  return (
  < >
    <Link to={{
      pathname: `/program/${program._id}`,
      key: `${program._id}`
      }}>

      <BrowserEntry title={program.title} />
    </Link>
  </>
  )
})}



    </PageDiv>      
  
  )
}

export default Browse;