import React, { Fragment, useMemo, useState, useEffect} from 'react';  

import {useTable} from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

import styled from 'styled-components'

import Button from '../../../common/src/components/Button';
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
    border-spacing: 0;
    border: 1px solid black;
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
  }
`

const Project = () => {
  const [resourcesF, setResourcesF] = useState([])
  const [resourceTable, setResourceTable] = useState(<div></div>)
  const [favorited, setFavorited] = useState()
  const auth = useAuth();

  let columns = [{
    Header: "Resources",
    columns: [
      {
        Header: "Logo",
        Cell: (row) => {
          return <img height={50} src={row.row.original.ResourceImg}/>
        }
      },
      {
        Header: "Name",
        accessor: "Resource"
      },
      {
        Header: "Description",
        accessor: "ResourceDescription"
      },
      {
        Header: "Link",
        Cell: (row) => {
          return <a href={row.row.original.ResourceLink}><Button color={"black"} title={"GO"}/></a>
        }
      }
    ]
  }];


  function addFavoriteDB(resource){

    let updates = {};
    updates["/users/" + auth.user.displayName + "/favorites/FirstGen/" + resource] = true

    firebase.database().ref().update(updates)
   
  } 
  
  function removeFavoriteDB(resource){

    let updates = {};
    updates["/users/" + auth.user.displayName + "/favorites/FirstGen/" + resource] = null

    firebase.database().ref().update(updates)
   
  }


  function changeFavorited(r){

    let temp = [];
    for(let i = 0; i < favorited.length; i++) {

      let f = favorited[i];

      if(f.resource == r.Resource){
        f.favorited = !f.favorited
        if(f.favorited == true){
          addFavoriteDB(f.resource);
        }else{
          removeFavoriteDB(f.resource);
        }
      }

      temp.push(f)
    }
    setFavorited(temp);

  }

  useMemo(() => {
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=First%20Generation")
    .then(response => {
      return response.json();
    })
    .then(resources => {
      setResourcesF(resources)
    })
  }, [])

  useMemo(() => {
 
    let userFavorites = []

    console.log(auth.user)
    console.log(resourcesF)
    console.log(favorited)
  
    if(auth.user){   

      let updates = {};
      updates["/users/" + auth.user.displayName + "/favorites/FirstGen/resource"] = 0

      firebase.database().ref().update(updates)
      
      firebase.database().ref("/users/" + auth.user.displayName + "/favorites/FirstGen/").once('value').then(function(snapshot){
        
        if(snapshot.val() != null){
          userFavorites = Object.keys(snapshot.val())
          let temp = [];
          
          if(resourcesF){
            resourcesF.forEach(r => {
          
              if(userFavorites.includes(r.Resource)){
                console.log("had it")
                temp.push({
                  resource: r.Resource,
                  favorited: true
                })
              }else{
                temp.push({
                  resource: r.Resource,
                  favorited: false
                })
              }

            });
          }
          setFavorited(temp)

        }
        console.log(userFavorites)
      })


    } else{
      let temp = [];
      if(resourcesF){
        resourcesF.forEach(r => {

          temp.push({
            resource: r.Resource,
            favorited: false
          })
        })
      }

      setFavorited(temp)
    }


  }, [auth.user, resourcesF]);

  useMemo(() => {
    
    if(auth.user && favorited){
      
      columns = [{
        Header: "Resources",
        columns: [
          {
            Header: "Logo",
            Cell: (row) => {
              return <img height={50} src={row.row.original.ResourceImg}/>
            }
          },
          {
            Header: "Name",
            accessor: "Resource"
          },
          {
            Header: "Description",
            accessor: "ResourceDescription"
          },
          {
            Header: "Link",
            Cell: (row) => {
              return <a href={row.row.original.ResourceLink}><Button color={"black"} title={"GO"}/></a>
            }
          },
          {
            Header: 'Favorite',
            Cell: (row) => {
              let show = false;
              for(let i = 0; i < favorited.length; i++){
                if(favorited[i].resource == row.row.original.Resource && favorited[i].favorited == true){
                  show = true;
                }
              }

            return <div style={{display:"flex", justifyContent:"center"}}>{show ? <FontAwesomeIcon icon={faHeart} size="2x" color={"blue"} onClick={() => changeFavorited(row.row.original)}/> : <FontAwesomeIcon icon={farHeart} size="2x" color={"blue"} onClick={() => changeFavorited(row.row.original)}/> }</div>
            }
          }
        ]
      }];
    }
      
    setResourceTable(
      <Table
        data={resourcesF}
        columns={columns}
      />
    )
  }, [favorited, auth.user])

  return (
    <SectionWrapper id="first-gen">
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
