import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Books from './Books';
class Search extends Component{
    state={
        searchValue:'',
    }
    UpdateSearchValue=(newValue)=>{
        this.setState(()=>({
            searchValue:newValue 
        }))
        this.props.SearchResult(newValue)
    }
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/"className="close-search bg-light"></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.searchValue} onChange={(e)=>{this.UpdateSearchValue(e.target.value)}} />
              </div>
            </div>
            <div className="search-books-results">
              {(this.props.searchedBooks.length>0&&<p className="text-light mb-3 mt-3 text-center h1">Search result is  <span className="text-danger">{this.props.searchedBooks.length}</span>  Books</p>)}
            <ol className="list-unstyled books-grid ">
              {/* unit the state from all pages */}
              {this.props.books.map((book)=>{
              this.props.searchedBooks.filter((searched)=>
                (searched.id===book.id)).map((index)=>(index.shelf=book.shelf))             
                 })}
              {/* showing result search */}
               {this.props.searchedBooks.map((index)=>
                      (index.imageLinks)?
                      ( 
                      <li key={index.id}>
                        <Books mychangeBook={(book,myselect)=>{this.props.changeBook(book,myselect)}} book={index} image={index.imageLinks.thumbnail} Shelf={index.shelf} title={index.title} author={index.authors}/>
                      </li>                
                      )
                    :
                    (
                      <li key={index.id}>
                      <Books mychangeBook={(book,myselect)=>{this.props.changeBook(book,myselect)}} book={index} image={" "} Shelf={index.shelf} title={index.title} author={index.authors}/>  
                      </li>
                    )
                    )}
            </ol>
            </div>
          </div>
        )
    }
}
export default Search; 