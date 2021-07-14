import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Components/Search'
import BookHome from './Components/BookHome'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state={
    books:[],
    searchedBooks:[]
  }
  //reading data from backend database
  componentDidMount(){
    BooksAPI.getAll().then((data)=>{
      this.setState(()=>({
        books:data
      }))
    })
  }
  //switch books shelves
  ChangeBook=(book,myselect)=>{
    BooksAPI.update(book,myselect).then((data)=>{
      //re-render with updated books in shelf
      BooksAPI.getAll().then((data)=>{
        this.setState(()=>({
          books:data
        }))
      })
      })
  }
  //search result 
  SearchResult=(userInput)=>{
    if(userInput){
      BooksAPI.search(userInput).then((data)=>{
        ((data.error)?(
          this.setState(()=>({
            searchedBooks:[]
          }))
        ):(
          this.setState(()=>({
            searchedBooks:data
          }))  
        ))
        console.log("data search=",this.state.searchedBooks)
      })  
    }
    else{
      this.setState(()=>({
        searchedBooks:[ ]
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={(()=>(<BookHome 
        books={this.state.books}
        changeBook={(book,myselect)=>{this.ChangeBook(book,myselect)
        }}
        />))}/>
        <Route path="/search"  render={(({history})=>(<Search books={this.state.books}  
         SearchResult={this.SearchResult}
         searchedBooks={this.state.searchedBooks}
         books={this.state.books}
         changeBook={(book,myselect)=>{this.ChangeBook(book,myselect)
          history.push('/')
         }}
        />))}/>
      </div>
    )
  }
}

export default BooksApp
