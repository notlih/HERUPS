import React, { Fragment, useMemo, useState, useEffect} from 'react';  

import {useTable} from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

import styled from 'styled-components'

import Button from '../../../common/src/components/Button';
import Heading from '../../../common/src/components/Heading';
import Text from '../../../common/src/components/Text';
import Container from '../../../common/src/components/UI/Container';

import SectionWrapper, {
  ProjectWrapper,
  TextWrapper,
  ImageWrapper,
} from './project.style';

import {useAuth} from  "../../../common/src/hooks/use-auth.js"

import firebase from "firebase"
import "firebase/database"

const Styles = styled.div `
  table {
    width: 100%;
    border-collapse:collapse
    
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
    tr:nth-child(even) {
      background-color: rgba(186, 186, 186, 0.5)
    }
  }
`

const Project = () => {
  const [resourcesF, setResourcesF] = useState([])
  const [resourceTable, setResourceTable] = useState(<div></div>)
  const [favorited, setFavorited] = useState()
  const auth = useAuth();

  let columns = [{
    Header: "Resources",
    Cell: (row) => {
      return(
        <div style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
          <div style={{display:"flex", flexDirection:"column", justifyContent: "space-between", alignItems:"center", textAlign:"center"}}>
            <img style={{width:"auto", height:"auto", maxWidth:"200px", padding:"10px"}} src={row.row.original.ResourceImg}/>
            <Text style={{padding:"10px", }} content={row.row.original.Resource}/>
          </div>
          <Text style={{padding:"10px"}} content={row.row.original.ResourceDescription}/>
          <div style={{display:"flex", flexDirection:"column", justifyContent: "space-between", alignItems:"center", textAlign:"center"}}>
            <a style={{padding:"10px"}} href={row.row.original.ResourceLink}><Button color={"black"} title={"GO"}/></a>
          </div>
        </div>
      )
    }
  }];

  
  function removeFavoriteDB(r){


    let updates = {};
    updates["/users/" + auth.user.displayName + "/favorites/" + r.Identifier + "/" + r.Resource] = null

    firebase.database().ref().update(updates)
   
  }


  function changeFavorited(r){

    let temp = [];
    for(let i = 0; i < favorited.length; i++) {

      let f = favorited[i];

      if(f.Resource == r.Resource){
          removeFavoriteDB(r);
      }else{
        temp.push(f)
      }

    }
    setFavorited(temp);

  }

  useMemo(() => {
  
    if(auth.user){   
      
      firebase.database().ref("/users/" + auth.user.displayName + "/favorites/").once('value').then(function(snapshot){
        
        let favorites = [];

        Object.keys(snapshot.val()).forEach(identifier => {          
          let r = snapshot.val()[identifier]
          Object.keys(r).forEach(resource => {


            if(resource != "resource"){
                
              r[resource].Identifier = identifier

              favorites.push(r[resource]);
            }


          })

        });
      
        setFavorited(favorites);
      })


    } 

  }, [resourcesF, auth.user]);

  useMemo(() => {
    
    if(favorited){
      
      console.log(favorited)

      columns = [{
        Header: "Resources",
        Cell: (row) => {

          let show = false;
          for(let i = 0; i < favorited.length; i++){
            if(favorited[i].Resource == row.row.original.Resource){
              show = true;
            }
          }

          return(
            <div style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
              <div style={{display:"flex", flexDirection:"column", justifyContent: "space-between", alignItems:"center", textAlign:"center"}}>
                <img style={{width:"auto", height:"auto", maxWidth:"200px", padding:"10px"}} src={row.row.original.ResourceImg}/>
                <Text style={{padding:"10px", }} content={row.row.original.Resource}/>
              </div>
              <Text style={{padding:"10px"}} content={row.row.original.ResourceDescription}/>
              <div style={{display:"flex", flexDirection:"column", justifyContent: "space-between", alignItems:"center", textAlign:"center"}}>
                <a style={{padding:"10px"}} href={row.row.original.ResourceLink}><Button color={"black"} title={"GO"}/></a>
                <div style={{display:"flex", justifyContent:"center", padding:"10px"}}>{show ? <FontAwesomeIcon icon={faHeart} size="2x" color={"blue"} onClick={() => changeFavorited(row.row.original)}/> : <FontAwesomeIcon icon={farHeart} size="2x" color={"blue"} onClick={() => changeFavorited(row.row.original)}/> }</div>
              </div>
            </div>
          )
        }
      }];

      setResourceTable(
        <Table
          data={favorited}
          columns={columns}
        />
      )

      if(favorited.length == 0){
        setResourceTable(<Heading as="h2" content="You currently dont have any resources favorited."/>)
      }

    }
      
    
  }, [favorited, auth.user])

  return (
    <SectionWrapper id="LowIncome">
      <Container width="1360px">
        <Styles>
          {resourceTable}
        </Styles>
      </Container>
    </SectionWrapper>
  );
}


function Table({columns, data}){
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return(
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Project;
