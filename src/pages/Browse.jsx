import React from "react";
import styled from 'styled-components';


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
  variables: { limit: 4, offset: 0 }});
if (loading) return <Spinner />
if (error) return <p>`Error: ${error.message}`</p>
console.log(data.allProgram);

// function onScroll(e) {
//    // if div is at the bottom, fetch more posts
//   //  if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) {
//      console.log(e)
//     // if there are no more posts to fetch, don't do anything

// }



  return (
    <PageDiv>
      <h2>Browse</h2>
      <Span><SmallText>Filter</SmallText></Span>


      {data.allProgram.map(program => {
  return ( 
      <BrowserEntry title={program.title} id={program._id} key={program._id} />
  )
})}



    </PageDiv>      
  
  )
}

export default Browse;