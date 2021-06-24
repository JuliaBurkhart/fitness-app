import React, {useState, useRef, useEffect} from "react";
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
  const [keyword, setKeyword] = useState("");
  const [programs, setPrograms] = useState([])
  const lastEntryRef = useRef();


  // useEffect(()=> {
  //     const observer = new IntersectionObserver(
  //       (element)=> console.log(element)
  //      );
  //     console.log(observer)
  //     observer.observe(lastEntryRef.current);
  //     return ()=> {observer.unobserve(lastEntryRef.current)};
  //   }, []);

    useEffect(() => {
      console.log("läuft");
      // const observer = new IntersectionObserver(
      //   ([entry]) => {
      //     console.log(entry);
  
      //     if (entry.isIntersecting) {
      //       //do your actions here
      //       console.log('It works!')
      //     }
      //   },
      //   {
      //     root: null,
      //     rootMargin: "0px",
      //     threshold: 0.1
      //   }
      // );
      // if (lastEntryRef.current) {
      //   observer.observe(lastEntryRef.current);
      // }
    }, []);
  
  

  // Erste Daten laden und in den State packen und von da aus rendern
  const {loading, error, data, refetch} = useQuery(GET_ALLPROGRAMS, {
    variables: { limit: 4, offset: 0 }});
  if (loading) return <Spinner />
  if (error) return <p>`Error: ${error.message}`</p>
  if (programs.length === 0 && data) {
    setPrograms(data.allProgram)
  }


   
    

  // Function die das Keyword aus dem Suchfilter im State speichert
  function handleKeywordChange(e) {
    const currentKeyword = e.target.value;
    setKeyword(currentKeyword);
  }

  // Wenn der Filter-Button gedrückt wird, werden Daten refetched, nach dem Keyword gefiltert und 
  // im State gespeichert und von dort aus gerendert
  function handleFilterSubmit(e) {
    e.preventDefault();
    refetch();
    const filteredPrograms = data.allProgram.filter((program)=> program.title.toLowerCase().includes(keyword));
    setPrograms(filteredPrograms);
  }

  // Function die die Filter-Component öffnet und schließt
  function handleClick() {
  (filterShown === false) ? setFilterShown(true) : setFilterShown(false);
  }


  return (
    <PageDiv>
      <h2>Browse</h2>
      <Button onClick={handleClick}><SmallText>Filter</SmallText></Button>
{(filterShown === true) && <Filter onSubmit={handleFilterSubmit} onKeywordChange={handleKeywordChange} />}

      {programs.map(program => {
  return ( 
      <BrowserEntry title={program.title} id={program._id} key={program._id} />
  )
})}


<SmallText ref={lastEntryRef}>
        load more...
      </SmallText>
    </PageDiv>      
  
  )
}

export default Browse;