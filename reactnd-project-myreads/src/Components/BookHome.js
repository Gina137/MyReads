import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Books from './Books'
class BookHome extends Component{
    render(){
        return(
            <div className="list-books">
              {/* header */}
            <div className="list-books-title bg-dark mb-3 pt-3 pb-4 pl-3 text-light">
              <h1 className=" d-inline float-left"> MyReads <i className="fa fa-book"></i></h1>
              <div className="d-flex justify-content-end align-items-end mr-5">
              <Link to="/search"><input type="text" className="searchBook bg-light"disabled/></Link> 
              </div>
            </div>
            {/* shelves */}
            <div className="list-books-content text-center">
                {/* Currently reading shelf */}
              <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="text-center">
                  <div className="books-grid">
                  <ol className="list-unstyled books-grid">
                  {this.props.books.filter((index)=>(index.shelf==="currentlyReading")).map((index)=> 
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
                </div>
                {/* want to read shelf */}
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="text-center">
                  <div className="books-grid">
                  <ol className="list-unstyled books-grid">
                  {this.props.books.filter((index)=>(index.shelf==="wantToRead")).map((index)=> 
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
                </div>
                {/* Read shelf */}
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="text-center">
                  <div className="books-grid">
                  <ol className="list-unstyled books-grid">
                      {this.props.books.filter((index)=>(index.shelf==="read")).map((index)=> 
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
                </div>
              </div>
            </div>
        )
    }
}
export default BookHome;